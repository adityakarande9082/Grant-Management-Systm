const GoogleStrategy = require("passport-google-oauth2").Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require("../model/auth/google");
const TwitterUser = require("../model/auth/twitte");
const FacebookUser = require("../model/auth/facebook")
const passport = require ("passport");
const LinkedInUser = require("../model/auth/linkedin");
module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:1010/auth/google/callback"
    },
        async (accessToken, refreshToken, profile, done) => {
            console.log("profile", profile);
            try {
                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    user = new User({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        image: profile.photos[0].value
                    });
                    await user.save();
                }
                done(null, user);
            } catch (error) {
                done(error);
            }
        }
    ));



    passport.use(
        new TwitterStrategy({
            consumerKey: process.env.TWITTER_CONSUMER_KEY,
            consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
            callbackURL: "http://localhost:1010/auth/twitter/callback",
            scope: ["profile", "email"]
        },
            async (token, tokenSecret, profile, done) => {
                try {
                    let user = await TwitterUser.findOne({ twitterId: profile.id });

                    if (!user) {
                        user = new TwitterUser({
                            twitterId: profile.id,
                            displayName: profile.displayName,
                            image: profile.photos[0].value
                            // Add other fields as needed
                        });
                        await user.save();
                    }
                    return done(null, user);
                } catch (error) {
                    return done(error, null);
                }
            })
    );


    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: "http://localhost:1010/auth/facebook/callback",
            profileFields: ["id", "displayName", "photos"],
          },
          async (accessToken, refreshToken, profile, done) => {
            console.log("Facebook profile", profile);
            try {
              let user = await FacebookUser.findOne({ facebookId: profile.id });
              if (!user) {
                user = new FacebookUser({
                  facebookId: profile.id,
                  displayName: profile.displayName,
                  image:
                    profile.photos && profile.photos[0] && profile.photos[0].value,
                });
                await user.save();
              }
              return done(null, user);
            } catch (error) {
              return done(error, null);
            }
          }
        )
      );


      // LinkedIn Strategy
      passport.use(new LinkedInStrategy({
        clientID: '778l7kfkz7ngig',
        clientSecret: 'FiNGB5vBnzuCUxXO',
        callbackURL: 'http://localhost:1010/auth/linkedin/callback',
        scope: ['openid', 'email'],
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            let user = await LinkedInUser.findOne({ linkedInId: profile.id });
    
            if (!user) {
                // Create a new user if one doesn't exist
                user = new LinkedInUser({
                    linkedInId: profile.id,
                    displayName: profile.displayName,
                    image: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null
                });
                await user.save();
            }
    
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    }));


    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((obj, done) => {
        done(null, obj);
    });
};
