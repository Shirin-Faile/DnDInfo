import express from 'express';
const classesRouter = express.Router();

classesRouter.get ('/', (req, res) => {
    res.render('pages/classes');
})

export default classesRouter;
