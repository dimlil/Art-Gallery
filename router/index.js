import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.render('home',{
        style: 'home.css'
    })
});
router.get('/gallary', (req, res) => {
    res.render('gallery',{
        style: 'gallery.css'
    })
});
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

export { router }