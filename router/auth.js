import { Router } from "express";
import { saveUser } from "../controllers/register.js";
const router = Router();

router.get('/register', (req, res) => {
    res.render('register', {
        style: 'register.css'
    })
});
router.get('/login', (req, res) => {
    res.render('login', {
        style: 'login.css'
    })
});

router.post('/register', (req, res) => {
    saveUser(req, res);
})

export { router }