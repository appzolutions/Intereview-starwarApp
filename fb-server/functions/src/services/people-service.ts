import fetch from 'node-fetch';
import { Film } from '../models/film';
import { HomePlanet } from '../models/homePlanet';
import  { People } from '../models/people';
import { Species } from '../models/species';

export class peopleService {
    private endPoint = 'https://swapi.dev/api/';
    public getAll() {
        return  fetch(this.endPoint + 'people/' )
        .then((response: any) => response.json())
        .then((data: any) => {
            console.log(data);
            if (data.results) {
                return data.results;
            } else {
                return {}
            }
            
        });
    }
    public  getPeople(id: string): Promise<any> {
      
      return  fetch(this.endPoint + 'people/' + id)
        .then(response => response.json())
        .then((data: any) => {
            var info : any[] = [];
            if (data) {
                let charactor       = this.buildPeopleStruct(data);
                if (data.homeworld) {
                    info.push(this.getHomePlanet(data.homeworld));
                }
                if (data.films) {
                    info.push(this.getFilms(data.films));
                }
                if (data.species) {
                    info.push(this.getSpecies(data.species));
                }
                return Promise.all(info).then((ress: any) => {
                   return {
                       ...charactor,
                       ...ress[0],
                       ...ress[1],
                       ...ress[2],
                   }
                });
            }
            
            return {};        
          
        }).catch(err => {
            console.error("error by me:::: >", err);
            return {'state':'error'};
        });
    }
    private async getHomePlanet(uri: String) {
        return await  fetch(uri).then((res: any) => res.json())
                .then(data => {
                    return { 
                        homePlanet: this.buildHomePlanetStruct(data)
                    };
                }).catch(err => {
                    console.error('Error on getHomePlanet: ', err);
                });
    }
    
    private async getFilms(dataArray: []){
         var films =  await Promise.all(dataArray.map(async (filmURI, index) => {
                return fetch(filmURI)
                    .then(res => res.json())
                    .then(data => {
                         return this.buildFilmStruct(data);
                  }).catch(err => {
                    console.error('level getFilms: '+ index, err);
                });
        }));
        return {
            films: films
        }
    }
    private async getSpecies(dataArray: []){
        var spices = await Promise.all(dataArray.map(async (uri, index) => {
          return  fetch(uri).then(res => res.json())
               .then(data => {
                   return this.buildSpicesStruct(data);
               }).catch(err => {
                   console.error('level getSpecies: '+ index, err);
               });
       }));
       return {
           spices: spices
       }
   }

    

    //** todo move it to separate class
    // ** format the returned data to match the model (data struct)
    // **//
    private buildPeopleStruct(data) {
        return   {
            name:       data.name || '',
            height:     data.height || '',
            mass:       data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            gender:     data.gender,
            birth_year: data.birth_year,
            homePlanet: {},
            
         } as People;
     }
    private buildFilmStruct(data) {
       return   {
            title:        data.title || '',// todo check if the object field exists or not null
            director:     data.director || '',
            producers:    data.producer || '',
            release_date: data.release_date || '',
        } as Film;
    }
    private buildSpicesStruct(data) {        
        return   {
             name:            data.name || '',// todo check if the object field exists or not null
             average_lifespan:data.average_lifespan || '',
             classification:  data.classification || '',
             language:        data.language || '',
         } as Species;
     }
    private buildHomePlanetStruct(data) {
        return   {
             title:     data.name || '',// todo check if the object field exists or not null
             terrain:   data.terrain || '',
             population:data.population || '',
         } as HomePlanet;
     }
  
}

