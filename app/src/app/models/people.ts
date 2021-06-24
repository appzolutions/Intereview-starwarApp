
import { Species } from './species';
import { HomePlanet } from './homePlanet';
import { Film } from './film';

export interface People  {
	name: string,
	height: string,
	mass: string,
	hair_color: string,
	skin_color: string,
	gender: string,
	birth_year: string,
	homePlanet: HomePlanet, // matchs: homeworld string -- The URL of a planet resource, a planet that this person was born on or inhabits.
    species: Species[],
    films: Film[]
}
