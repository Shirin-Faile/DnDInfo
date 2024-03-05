import express from "express";
import * as path from 'path';
import backgroundsRouter from "./routes/backgrounds.js"
import classesRouter from "./routes/classes.js";
import racesRouter from "./routes/races.js";
import { backgrounds } from "./data/backgrounds-info.js";

const app = express();
const port = 3077;
const __dirname = path.resolve();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))

app.get("/", (req, res) => 
{
    res.render('pages/home')
})

app.use('/backgrounds', backgroundsRouter);
app.use('/classes', classesRouter);
app.use('/races', racesRouter);

app.listen(port, console.log(`Listening on ${port}`))