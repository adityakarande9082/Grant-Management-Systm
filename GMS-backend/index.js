
const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 1112;
app.use(express.json());
const dbconnect = require("./config/database");
const router = require("./routes/router");
const passport = require ("passport")
const session = require("express-session");
// Import controller
const allUserController = require('./controllers/allUserController');
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const cors = require ("cors");
const User = require("./model/auth/google");

// Passport configuration
require('./config/passport-setup')(passport);  

// Connect to MongoDB
dbconnect();

// Middlewares
app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true
}));



app.use(express.json()); // This should be right after setting up CORS and before routes




app.use(session({
    secret:"12345678abhi",
    resave:false,
    credentials:true,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session())

//initial google oauth login 

app.get("/auth/google", passport.authenticate("google", {scope:["profile","email"]}));

app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect:"http://localhost:3000/",
    failureRedirect:"http://localhost:3000/login"
}));


// twitter OAuth Routes
app.get("/auth/twitter", passport.authenticate("twitter"));

app.get("/auth/twitter/callback", passport.authenticate("twitter", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login"
}));

// Facebook OAuth Routes
app.get("/auth/facebook", passport.authenticate("facebook"));
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
  })
);


// LinkedIn authentication route
app.get('/auth/linkedin', passport.authenticate('linkedin'));

app.get("/auth/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3000/login",
  })
);
app.use("/api/auth", router);

// Start the server
app.listen(PORT, () => {

console.log(`Server running on http://localhost:${PORT}`);

});