import express from 'express';
import {} from '../data/races-info.js';

const racesRouter = express.Router();

racesRouter.get('/', (res, req) => {
    res.render('pages/home', 
    {

    })
})

export default racesRouter