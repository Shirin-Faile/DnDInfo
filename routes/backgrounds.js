import express from 'express';
import {} from  '../data/backgrounds-info.js'

const backgroundsRouter = express.Router();

backgroundsRouter.get ('/', (req, res) => {
    res.render('pages/home',  
    {

    })
})

export default backgroundsRouter

