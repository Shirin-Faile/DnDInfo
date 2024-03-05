import express from 'express';
const racesRouter = express.Router();

racesRouter.get ('/', (req, res) => {
    res.render('pages/races');
})

export default racesRouter;
