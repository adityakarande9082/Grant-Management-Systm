const bcrypt = require("bcrypt");
require("dotenv").config();
const user = require("../model/user");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const keySecret = process.env.JWT_SECRET;

const User = require("../model/user");
const Userdb = require("../model/user");
const userdb = require("../model/user");


// router.post("/register",
 const registerUser = async (req, res) => {
    const { firstName,lastName, email } = req.body;

    // Validate input fields
    if (!firstName || !lastName || !email) {
        return res.status(422).json({ error: "Please fill in all the required fields" });
    }

    try {
        // Check if user already exists
        const existingUser = await userdb.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Create a new user and save to the database
        const newUser = new userdb({ firstName,lastName, email });
        await newUser.save();

        // Generate a JWT token for the new user
        const token = await newUser.generateAuthtoken();

        

        // Set the token in a secure HTTP-only cookie
        res.cookie("usercookie", token, {
            expires: new Date(Date.now() + 9000000),
            httpOnly: true
        });

        // Create email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Set Password Link",
            text: `This link is valid for 15 minutes: http://localhost:3000/setPassword/${newUser._id}`,
        };

        // Configure email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);

        // Respond with success
        res.status(201).json({ status: 201, message: "User registered and email sent successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// GET /setpassword/:id/:token: Verify user when setting password
// router.get("/setpassword/:id/:token",
 const setPassword = async (req, res) => {
    const { id, token } = req.params;
    
    try {
        // Verify token and find the user
        const validUser = await userdb.findOne({ _id: id });
        
        if (validUser) {
            // Respond with user data for further processing
            res.status(201).json({ status: 201, validUser });
        } else {
            res.status(401).json({ status: 401, message: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// router.post("/setpassword1/:userId",
 const setPassword1 = async (req, res) => {
    const { password, cpassword } = req.body;
    const { userId } = req.params;


    if (!password || !cpassword) {
        return res.status(422).json({ error: "Please fill in all the required fields" });
    }

    if (password !== cpassword) {
        return res.status(422).json({ error: "Passwords do not match" });
    }

    try {       
        // Find the user by ID
        const user = await userdb.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Hash the new password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;

        
        await user.save();

        
        res.status(201).json({ message: "Password set successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Fill in all the details" });
    }
    try {
        const userValid = await User.findOne({ email: email });
        if (userValid) {
            const isMatch = await bcrypt.compare(password, userValid.password);
            if (!isMatch) {
                return res.status(422).json({ error: "Invalid details" });
            } else {

                // token generate
                const token = await userValid.generateAuthtoken();

                // cookiegenerate
                res.cookie("usercookie", token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(200).json({ message: "Login successful", token, result });
            }
            // console.log(token);
        } else {
            res.status(401).json({ status: 401, message: "invalid detailssss" });
        }
    } catch (error) {
        // console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const sendpasswordlink = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Please provide your email address"});
    }

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate a token for password reset
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        // Update user's verifytoken field with the generated token
        user.verifytoken = token;
        await user.save();

        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        // Compose email options
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: 'Password Reset Link',
            text: `Please click on the following link to reset your password this link valid for 2 minutes: ${process.env.CLIENT_URL}/setPassword/${user.id}/${token} ` // Update with your client URL
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).json({ message: "Failed to send email" });
            } else {
                console.log("Email sent successfully");
                return res.status(200).json({ message: "Email sent successfully" });
            }
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// verify user for forgot password time
const forgot = async (req, res) => {
    const { id, token } = req.params;
    try {
        const validuser = await Userdb.findOne({ _id: id, verifytoken: token });

        if (!validuser) {
            return res.status(401).json({ status: 401, message: "User does not exist" });
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({ status: 401, message: "Invalid token" });
        }
        res.status(201).json({ status: 201, validuser });
    } catch (error) {
        console.error("Error in forgot endpoint:", error);
        res.status(500).json({ status: 500, message: "Internal Server Error" });
    }
};

const changepass = async (req, res) => {
    const { id, token } = req.params;
    const { password, cpassword } = req.body;

    if (!password || !cpassword) {
        return res.status(422).json({ error: "Please fill in all the required fields." });
    }

    if (password !== cpassword) {
        return res.status(422).json({ error: "Passwords do not match." });
    }

    try {
        // Verify the token first to catch any invalid or expired tokens
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Ensure the token belongs to the user with the given ID
        if (decoded._id !== id) {
            return res.status(401).json({ error: "Invalid token for this user." });
        }

        // Find the user by ID and verify token
        const user = await Userdb.findOne({ _id: id, verifytoken: token });
        if (!user) {
            return res.status(404).json({ error: "User not found or token is invalid." });
        }

        // Hash the new password
        const newpassword = await bcrypt.hash(password, 12);

        // Update the user's password and clear the verifytoken
        await Userdb.findByIdAndUpdate(id, { 
            password: newpassword,
            verifytoken: null  // Optionally clear or reset the token after use
        });

        res.status(200).json({ message: "Password updated successfully." });
    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ error: "Failed to authenticate token." });
        } else if (error.name === "TokenExpiredError") {
            return res.status(401).json({ error: "Token has expired." });
        }
        console.error("Error changing password:", error);
        res.status(500).json({ error: "Internal Server Error." });
    }
};


module.exports = { registerUser , setPassword ,setPassword1 , login, sendpasswordlink, forgot, changepass };