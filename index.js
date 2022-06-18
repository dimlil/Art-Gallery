import Express from "express";
import { router } from "./router/index.js";

const app = Express();

app.use(router);

const port = 4000;
app.listen(port, console.log(`Server is running on port: ${port}`));