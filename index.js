import Express from "express";
import { router } from "./router/index.js";
import handlebars from 'express-handlebars'

const app = Express();

app.use(router);
app.engine('.hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); 
app.set('views', './views');

const port = 4000;
app.listen(port, console.log(`Server is running on port: ${port}`));