import { Schema, model } from 'mongoose';

const profilSchema = new Schema({
    firstname: {
        type: String,
        required: true, 
    },
    lastname: {
        type: String,
        required: true,
    },
    jobtitle: {
        type: String,
        required: true,

    },
    bio: {
        type: String,
    },
    avatarUrl: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique:true,    
    },
    address: {
        type: String,
    },
    birthday: {
        type: String,
    },
    github: {
        type: String,
        unique:true,
    },
    linkedin: {
        type: String,
        unique:true,
    },
    experiences: {
        type: [
            {
                compagny: String,
                position: String,
                duration: {
                    from: Date || String,
                    to: Date || String,
                },
            },
        ],
        required: true,
    },
    formations: {
        type: [
            {
                school: String,
                degree: String,
                duration: {
                    from: Date || String,
                    to: Date || String,
                },
            },
        ],
        required: true,
    },

    domaines: { type: [Schema.Types.ObjectId], ref: 'Domaine', required: true },
});

export default model('profil', profilSchema);
