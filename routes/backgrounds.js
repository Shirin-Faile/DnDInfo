import express from 'express';
const backgroundsRouter = express.Router();

backgroundsRouter.get ('/', (req, res) => {
    res.render('pages/backgrounds');
})

export default backgroundsRouter;

