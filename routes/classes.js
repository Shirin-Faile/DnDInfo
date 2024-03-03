import express from 'express';
import {} from '../data/classes-info.js';

const classesRouter = express.Router();

classesRouter.get ('/', (req, res) => {
    res.render('pages/home', 
    {

    })
})

export default classesRouter