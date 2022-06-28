import { Router } from "express";
import { getUserStatus } from "../controllers/auth/verifyUser.js";
const router = Router();

router.get('/',getUserStatus, (req, res) => {
    res.render('home',{
        style: 'home.css',
        isLoggedIn: req.body.isLoggedIn
    })
});
router.get('/gallary', (req, res) => {
    res.render('gallery',{
        style: 'gallery.css'
    })
});
router.get('/create', (req, res) => {
    res.render('create',{
        style: 'create.css'
    })
});
router.get('/profile', (req, res) => {
    res.render('profile',{
        style: 'profile.css'
    })
});

export { router }