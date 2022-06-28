import Express from "express";
import { router } from "./router/index.js";
import { router as authRouter } from "./router/auth.js";
import handlebars from 'express-handlebars'
import dotenv from 'dotenv'
import { conectToDB } from "./connectToDB.js";

const app = Express();

dotenv.config();

app.engine('.hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(Express.static('static'));

app.use(Express.json());
app.use(Express.urlencoded({ extended: true}));
app.use(router);
app.use(authRouter);

app.get('*', (req, res) => {
    res.render('errorPage',{
        style: '404.css'
    });
});

conectToDB();

const port = process.env.PORT;
app.listen(port, console.log(`Server is running on port: ${port}`));