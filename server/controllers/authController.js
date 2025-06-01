import userModal from "../models/userModal.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import transporter from "../config/nodemailer.js";

export const register = async (req, res) => {
    const { name , email, password} = req.body;
    if(!name || !email || !password) {
        return res.json({ success: false, message:"Missing Details"})
    }
    try {
        const existingUser = await userModal.findOne({email});
        if(existingUser) {
            return res.json({
                success: false,
                message:"User already exist"
            })
        }
        const  hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModal({
            name, email, password: hashedPassword
        })
        await user.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,  { expiresIn:'7d'} );
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        const mailOptions = {
            from : process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcom to Lexably',
            text:`Welcome to Lexably, Your email Address is : ${email}`
        }
        await transporter.sendMail(mailOptions);
        return res.json({ success: true});
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


export const login = async (req, res) => {
 const { email, password} = req.body;
 if(!email || !password) {
    return res.json({
        success: false,
        message: 'Email/ Password Required'
    })
 }
 try {
    const user = await userModal.findOne({email})
    if(!user) {
        res.json({
            success: false,
            message:"Invalid Email"
        })
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if(!isMatched) {
        res.json({
            success: false,
            message:"Invalid Password"
        })
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,  { expiresIn:'7d'} );
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
    return res.json({ success: true});

 } catch (error) {
    return res.json({
        success: false,
        message: error.message
    })
 }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.json({
            success: true,
            message:"Logged Out"
        })
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}