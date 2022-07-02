import bcrypt from 'bcrypt';
import User from '../../models/user.js';
import { generateToken } from './verifyUser.js';

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) { return res.redirect('/login') }

    const status = await bcrypt.compare(password, user.password);
    if (status) {
        const token = await generateToken(username);
        res.cookie('aid', token);
    }
    return res.redirect('/');
}