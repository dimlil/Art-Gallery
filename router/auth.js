import { Router } from "express";
const router = Router();

router.get('/register', (req, res) => {
    res.render('register',{
        style: 'register.css'
    })
});
router.get('/login', (req, res) => {
    res.render('login',{
        style: 'login.css'
    })
});

export {router}