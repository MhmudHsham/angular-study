import { Component, OnInit } from '@angular/core';
import {Hero} from '../../Models/hero';
import { HEROS } from '../../Models/mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

	heros = HEROS;
	selectedHero: Hero;
	
	constructor() { }
 
	ngOnInit() {
	}

	chooseHero(hero: Hero): void {
		this.selectedHero = hero;
	}
}
