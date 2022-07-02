import { Router } from "express";
import { getUserStatus } from "../controllers/auth/verifyUser.js";
const router = Router();

router.get('/', getUserStatus, (req, res) => {
    res.render('home', {
        style: 'home.css',
        isLoggedIn: req.body.isLoggedIn
    })
});
router.get('/gallary', getUserStatus, (req, res) => {
    res.render('gallery', {
        style: 'gallery.css',
        isLoggedIn: req.body.isLoggedIn
    })
});
router.get('/create', getUserStatus, (req, res) => {
    res.render('create', {
        style: 'create.css',
        isLoggedIn: req.body.isLoggedIn
    })
});
router.get('/profile', getUserStatus, (req, res) => {
    res.render('profile', {
        style: 'profile.css',
        isLoggedIn: req.body.isLoggedIn
    })
});

export { router }