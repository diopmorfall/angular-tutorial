import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	host: {class: 'a'}
})
export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
