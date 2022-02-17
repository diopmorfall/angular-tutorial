import { Component, Input, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
	selector: 'app-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: ['./item-list.component.scss'],
	host: {class: 'flex-column-centered'}
	//? this class will be applied on the component itself
})
export class ItemListComponent implements OnInit {
	animals = this.animalService.getAnimals();
	constructor(private animalService: AnimalService) { }

	ngOnInit(): void {
	}

}
