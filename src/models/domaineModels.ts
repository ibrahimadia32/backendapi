import { Schema, model } from 'mongoose';

const domaineSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,

    },
    color:{
        type: String,
        unique: true,
    
    },
});

export default model('Domaine', domaineSchema);
