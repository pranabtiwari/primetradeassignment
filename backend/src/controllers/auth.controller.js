import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import authSchema from '../schemas/auth.schema.js';



const register = async (req, res) => {
    const parsed = authSchema.registerSchema.safeParse(req.body);


    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors });
    }
    const { username, email, password } = parsed.data;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(400).json({ error: 'Username or email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });

}

const login = async (req, res) => {
    const loginSchema = authSchema.loginSchema.safeParse(req.body);

    if (!loginSchema.success) {
        return res.status(400).json({ error: loginSchema.error.errors });
    }
    const { email, password } = loginSchema.data;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,          // HTTPS (required)
        sameSite: "none",      // cross-site
        domain: ".vercel.app", // 🔥 KEY LINE
        path: "/",
        maxAge: 60 * 60 * 1000,
    });


    return res.status(200).json({
        message: 'User logged in successfully',
        token
    });
}





export default {
    register,
    login
};




