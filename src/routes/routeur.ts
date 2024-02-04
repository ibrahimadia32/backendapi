import express, { Router } from 'express';
import profilRoute from './profilRoute';
import domaineRoute from './domaineRoute';
import userRoute from './userRoute';

const router: Router = express.Router();

router.use('/profil', profilRoute);
router.use('/domaine', domaineRoute);
router.use('/user', userRoute);

export default router;
