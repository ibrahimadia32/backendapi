import express, { Router } from 'express';
import * as domaineController from '../controllers/domaineController';

const router: Router = express.Router();

// Route pour la création d'un domaine
router.post('/create', domaineController.createDomaine);

// Route pour la récupération de tous les domaines
router.get('/', domaineController.getAllDomaines);

export default router;
