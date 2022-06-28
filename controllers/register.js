// import {User} from '../../models/user'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

export const saveUser = async (req, res) => {
    const { username, password, address } = req.body;
    const salt = await bcrypt.genSalt(10);
    const cryptedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        username,
        password: cryptedPassword,
        address,
        myPublications: []
    });

    try {
        await user.save();
        return res.redirect('/');
    } catch (e) {
        console.log(e);
        return res.redirect('/register');
    }
}