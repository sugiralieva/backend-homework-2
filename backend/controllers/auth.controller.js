import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        const user = await User.findOne({username})

        if(user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //https://avatar-placeholder.iran.liara.run/


        const newUser = new User({
            username,
            password:hashedPassword,
        })

       if(newUser) {
           // Generate JWT token here
           generateTokenAndSetCookies(newUser._id,res)
           await newUser.save();

           res.status(201).json({
               _id: newUser._id,
               username: newUser.username,
           });
       } else {
           res.status(400).json({error:"Invalid user data"})
       }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const hashPassword = await bcrypt.hash(password, 10);
        const isPasswordCorrect = await bcrypt.compare(hashPassword, user?.password || "")

        if(!user || isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookies(user._id, res)

        res.status(200).json({
            _id: user._id,
            username: user.username,
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message:"Logged out successfully"});

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

