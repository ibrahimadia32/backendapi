import Domaine from '../models/domaineModels';
import { Request, Response } from 'express';

export const createDomaine = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { name } = req.body;

        // Création d'une nouvelle instance de Domaine
        const newDomaine = new Domaine({
            name,
        });
        console.log(newDomaine);
        // Enregistrement du domaine dans la base de données
        const savedDomaine = await newDomaine.save();

        res.status(201).json(savedDomaine); // Réponse avec le domaine créé
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du domaine.' });
    }
};

export const getAllDomaines = async (req: Request, res: Response) => {
    try {
        const domaines = await Domaine.find();
        res.status(200).json(domaines);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des domaines.' });
    }
};
