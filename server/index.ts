import { peopleService } from './services'
import  express from 'express';
// definitins 
const app     = express();
const port    = 3000;
const plSrv   = new peopleService(); 

// call middlewares in a request function pipeline
app.use(express.json());
app.use((req, res, next)=> {
    next(); // to pass control to the next function into the pipeline
});
// main routes
app.get('/api/characters/:id', (req:  express.Request, res:  express.Response) => {
    // to do validate integer 
    let peopleId = req.params.id;
    plSrv.getPeople(peopleId).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        console.error('Unable to complete request!', err);
        res.status(404).send('error');

    })
   
    // todo validate id
    /*fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(data => {
        try {
            console.log(data);
            if (data && data.homeworld) {

            }
            res.status(200).send('success');
            return;
        } catch {
            res.status(404).send('Error occuried while handling the resource 1201');
            return;
        }
    })
    .catch(err => {
        console.error(err);
        res.status(404).send('Resource Not Found 1202');
        return;
    });*/
    
    

});

app.listen(port, ()=> {
    console.log('Listining port 3000')
})