import express from 'express';
import { races } from '../data/races-info.js';
const racesRouter = express.Router();

racesRouter.get ('/', (req, res) => {
    res.render('pages/races', {races: races});
})

export default racesRouter;
