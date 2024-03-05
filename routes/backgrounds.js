import express from 'express';
import { backgrounds } from '../data/backgrounds-info.js';
const backgroundsRouter = express.Router();

backgroundsRouter.get ('/', (req, res) => {
    res.render('pages/backgrounds', {backgrounds: backgrounds});
})

export default backgroundsRouter;

