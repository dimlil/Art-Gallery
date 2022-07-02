import { Router } from "express";
import { saveUser } from "../controllers/auth/register.js";
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
router.get('/logout',(req,res)=>{
    res.clearCookie('aid');
    res.redirect('/')
})
export { router }