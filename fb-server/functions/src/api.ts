import { peopleService } from './services'
import * as express from 'express';
import * as cors from 'cors';
// definitins 
const app     = express();
const plSrv   = new peopleService(); 

// call middlewares in a request function pipeline
app.use(cors());
app.use(express.json());

// main routes
// get charachter by passing id as param 
app.get('/characters/:id', (req:  express.Request, res:  express.Response) => {
    // todo validate param 
    let peopleId = req.params.id;
    plSrv.getPeople(peopleId).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        console.error('Unable to complete request!', err);
        res.status(404).send('error');

    });
});
// get all charachters
app.get('/characters/', (req:  express.Request, res:  express.Response) => {
    // todo validate param 
    plSrv.getAll().then((result: any) => {
        res.status(200).send(result);
    }).catch((err: any) => {
        console.error('Unable to complete request!', err);
        res.status(404).send('error');

    })

});


export default app;

