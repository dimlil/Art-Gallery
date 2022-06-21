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

export { router }