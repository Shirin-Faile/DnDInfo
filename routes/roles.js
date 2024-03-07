import express from 'express';
import { roles } from '../data/roles-info.js';
import { subClasses } from '../data/subclass-info.js';
const rolesRouter = express.Router();

rolesRouter.get ('/', (req, res) => {
    res.render('pages/roles', {roles: roles});
});

rolesRouter.get('/subclasses', (req, res) => {
    res.render('pages/subclasses', {subClasses: subClasses});
});

export default rolesRouter;
