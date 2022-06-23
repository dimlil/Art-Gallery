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