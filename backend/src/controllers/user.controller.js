import userSchema from '../models/user.model.js';

const getProfile = async (req, res) => {
    try {
        const user = await userSchema.findById(req.user.userId).select('-password');

        if (!user){
            return res.status(404).json({ error: 'User not found.' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { username, email } = req.body;

        if (!username || !email) {
            return res.status(400).json({ error: 'Username and email are required.' });
        }
        
        const user = await userSchema.findByIdAndUpdate(
            req.user.userId,
            { username, email },
            { new: true, runValidators: true }
        ).select('-password');

        if (!user){
            return res.status(404).json({ error: 'User not found.' });
        }

        res.json(user);

    }catch (err) {
        res.status(500).json({ error: 'Server error.' });
    }
}


export default {
    getProfile,
    updateProfile
}