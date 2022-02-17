import { Injectable } from '@angular/core';
import { Animal, animals } from '../animals';
import { cloneDeep } from "lodash";

@Injectable({
	providedIn: 'root'
})
export class AnimalService {
	animals: Animal[] = [];

	constructor() { 
		this.animals = cloneDeep(animals);
	}

	getAnimals(){
		return this.animals;
	}
}
