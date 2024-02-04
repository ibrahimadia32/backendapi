import express from 'express';
import dbConnect from './config/dbConnect';
import router from './routes/routeur';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoClient } from 'mongodb';


const app = express();
const port = 8000;

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World! ibou ici back end');
});

dbConnect
    .then(() => {
        app.use(router);

        app.listen(port, () => {
            console.log('Server is running on port ' + port + '...');
        });
    })
    .catch((err) => {
        console.log(err);

        process.exit(1);
    });
