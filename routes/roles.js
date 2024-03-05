import express from 'express';
import { roles } from '../data/roles-info.js';
const rolesRouter = express.Router();

rolesRouter.get ('/', (req, res) => {
    res.render('pages/roles', {roles: roles});
})

export default rolesRouter;
