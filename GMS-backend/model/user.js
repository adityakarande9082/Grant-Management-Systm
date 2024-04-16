const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validator = require ("validator");
// const userSchema = new mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     lastName:{
//         type:String,
//         required:true,
//         trim:true,
//     },

//     email:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     password:{
//         type:String,

//     },
//     cpassword:{
//         type:String,

//     },
//     tokens: [
//         {
//             token: {
//                 type: String,
//                 required: true,
//             }
//         }
//     ],
//     verifytoken:{

//         type: String,
//     }
// });

// userSchema.pre("save", async function (next) {

//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword = await bcrypt.hash(this.cpassword, 12);
//     }


//     next()
// });
// //token generate
// userSchema.methods.generateAuthtoken = async function () {
//     try {
//         let token23 = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,  // this is payload
//             {
//                 expiresIn: "2h"
//             });

//         this.tokens = this.tokens.concat({ token: token23 }); // this.token means which is in userschema and token23 is 
//         await this.save();
//         return token23;
//     } catch (error) {
//         res.status(422).json(error)
//     }
// }


// const Userdb = mongoose.model("User", userSchema);
// module.exports = Userdb;


const { JWT_SECRET } = process.env;


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) { // We use validator funtion beacuse if we add any other value instead of mail then it will throw the error.  
            if (!validator.isEmail(value)) {
                throw new Error("It is not valid email")
            }
        }
    },
    password: {
        type: String,
        minlength: 9
    },
    cpassword: {
        type: String,
        minlength: 9
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ],
});


//token generate 
// Make sure JWT_SECRET is defined in your environment variables

userSchema.methods.generateAuthtoken = async function () {
    try {
        // Generate a new token
        const token = jwt.sign({ _id: this._id }, JWT_SECRET, { expiresIn: '30d' });

        // Save the new token to the user's tokens array
        this.tokens.push({ token });

        // Save the user document to the database
        await this.save();

        // Log the tokens for debugging
        console.log(this.tokens);


        // Return the newly generated token
        return token;
    } catch (error) {
        // Handle errors if any
        throw new Error(error);
    }
};

// creating model
const userdb = new mongoose.model("setpasswordmail", userSchema);
module.exports = userdb;