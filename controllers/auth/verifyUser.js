import jwt from "jsonwebtoken";

export const generateToken = data => {
    const token = jwt.sign(data, process.env.PRIVATE_KEY);
    return token;
}

export const getUserStatus = (req, res, next) => {
    const token = req.cookies['aid'];
    if (!token) {
        req.body.isLoggedIn = false;
    }
    else {
        try {
            jwt.verify(token, process.env.PRIVATE_KEY);
            req.body.isLoggedIn = true;
        } catch (e) {
            req.body.isLoggedIn = false;
        }
    }
    next();
}