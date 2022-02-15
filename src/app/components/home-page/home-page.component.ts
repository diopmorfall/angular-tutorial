import { Component, OnInit } from '@angular/core';
import { Animal, animals } from 'src/app/animals';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  animals: Animal[] | undefined;
  constructor() { 
    this.animals = animals;  
  }

  ngOnInit(): void {
  }

}
