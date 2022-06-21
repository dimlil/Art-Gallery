import Express from "express";
import { router } from "./router/index.js";
import handlebars from 'express-handlebars'

const app = Express();

app.engine('.hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(Express.static('static'));

app.use(router);

app.get('*', (req, res) => {
    res.render('errorPage',{
        style: '404.css'
    });
});

const port = 4000;
app.listen(port, console.log(`Server is running on port: ${port}`));