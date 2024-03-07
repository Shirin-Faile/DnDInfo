import express from 'express';
import { races } from '../data/races-info.js';
import { uniqueRaces } from '../data/races-info.js';
const racesRouter = express.Router();

racesRouter.get ('/', (req, res) => {
    res.render('pages/races', {races: races});
});

racesRouter.get('/uniqueRaces', (req, res) => {
    res.render('pages/uniqueRaces', {uniqueRaces: uniqueRaces})
});

export default racesRouter;
