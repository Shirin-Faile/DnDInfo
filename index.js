import express from "express";
import * as path from 'path';
import backgroundsRouter from "./routes/backgrounds.js"
import rolesRouter from "./routes/roles.js";
import racesRouter from "./routes/races.js";

const app = express();
const port = 3077;
const __dirname = path.resolve();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))

app.get("/", (req, res) => 
{
    res.redirect("/home");
});

app.get("/home", (req, res) => 
{
    res.render('pages/home');
});

app.use('/backgrounds', backgroundsRouter);
app.use('/roles', rolesRouter);
app.use('/races', racesRouter);

app.listen(port, console.log(`Listening on ${port}`))
