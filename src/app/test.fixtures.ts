import { PersonResponse } from "./models/people";
import { StarshipResponse } from "./models/starship";

export const testStarship = {
    MGLT: "10 MGLT",
    cargo_capacity: "1000000000000",
    consumables: "3 years",
    cost_in_credits: "1000000000000",
    created: "2014-12-10T16:36:50.509000Z",
    crew: "342953",
    edited: "2014-12-10T16:36:50.509000Z",
    hyperdrive_rating: "4.0",
    length: "120000",
    manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
    max_atmosphering_speed: "n/a",
    model: "DS-1 Orbital Battle Station",
    name: "Death Star",
    passengers: "843342",
    films: [
        "https://swapi.dev/api/films/1/"
    ],
    pilots: [],
    starship_class: "Deep Space Mobile Battlestation",
    url: "https://swapi.dev/api/starships/9/"
}
export const testStarship2 = {
    name: "Death Star",
	model: "DS-1 Orbital Battle Station",
	manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
	cost_in_credits: "1000000000000",
	length: "120000",
	max_atmosphering_speed: "n/a",
	crew: "342,953",
	passengers: "843,342",
	cargo_capacity: "1000000000000",
	consumables: "3 years",
	hyperdrive_rating: "4.0",
	MGLT: "10",
	starship_class: "Deep Space Mobile Battlestation",
	pilots: [],
	films: [
		"https://swapi.dev/api/films/1/"
	],
	created: "2014-12-10T16:36:50.509000Z",
	edited: "2014-12-20T21:26:24.783000Z",
	url: "https://swapi.dev/api/starships/9/"
}

export const testPerson = {
    birth_year: "19 BBY",
    eye_color: "Blue",
    films: [
        "https://swapi.dev/api/films/1/"
    ],
    gender: "Male",
    hair_color: "Blond",
    height: "172",
    homeworld: "https://swapi.dev/api/planets/1/",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "Fair",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-10T13:52:43.172000Z",
    species: [
        "https://swapi.dev/api/species/1/"
    ],
    starships: [
        "https://swapi.dev/api/starships/12/",
    ],
    url: "https://swapi.dev/api/people/1/",
    vehicles: [
        "https://swapi.dev/api/vehicles/14/"
    ]
}

export const testPerson2 = {
    name: "C-3PO",
	height: "167",
	mass: "75",
	hair_color: "n/a",
	skin_color: "gold",
	eye_color: "yellow",
	birth_year: "112BBY",
	gender: "n/a",
	homeworld: "https://swapi.dev/api/planets/1/",
	films: [
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/4/",
		"https://swapi.dev/api/films/5/",
		"https://swapi.dev/api/films/6/"
	],
	species: [
		"https://swapi.dev/api/species/2/"
	],
	vehicles: [],
	starships: [],
	created: "2014-12-10T15:10:51.357000Z",
	edited: "2014-12-20T21:17:50.309000Z",
	url: "https://swapi.dev/api/people/2/"
}

export const mockPeopleResponse: PersonResponse = {
    count: 82,
    previous: '',
    results: [testPerson],
    next: 'https://swapi.dev/api/people?page=2',
};

export const mockStarshipsResponse: StarshipResponse = {
    count: 82,
    previous: '',
    results: [testStarship],
    next: 'https://swapi.dev/api/starships?page=2',
};