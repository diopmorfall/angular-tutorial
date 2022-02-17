import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/animals';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
	host: {class: 'flex-column-centered'}
})
export class ItemComponent implements OnInit {
	animal: Animal | undefined;
	animals = this.animalService.getAnimals();

	constructor(private route: ActivatedRoute, private animalService: AnimalService) { 
		const routeParams = this.route.snapshot.paramMap;
		const animalIdFromRoute = Number(routeParams.get('animalId'));
		//! the animalId must be named in the same way as the route parameter in the routing file

		this.animal = this.animals.find(
			(animal) => animal.id === animalIdFromRoute
		);
	}

	saveAnimal(name: string){
		alert('Thank you for supporting the ' + name.toLowerCase());
	}

	ngOnInit(): void {
	}

}
