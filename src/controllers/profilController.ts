import Profil from '../models/profilModel';
import { Request, Response } from 'express';

export const createProfil = async (req: Request, res: Response) => {
    try {
        

        // Création d'une nouvelle instance de Profil
        const newProfil = new Profil(req.body);

        // Enregistrement du profil dans la base de données
        const savedProfil = await newProfil.save();

        res.status(201).json(savedProfil); // Réponse avec le profil créé
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du profil.' });
    }
};

export const getProfil = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const profil = Profil.findById(id).exec();
        res.status(200).json(getProfil);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération du profil.' });
    }
};

export const getAllProfil = async (req: Request, res: Response) => {
    try {
        const profil = await Profil
            .find()
            .populate('domaines').exec()
        res.status(200).json(profil);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des profils.' });
    }
};