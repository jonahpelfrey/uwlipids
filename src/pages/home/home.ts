import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Patient, Status } from '../../models/patient';

@Component({
	selector: 'page-home',
  	templateUrl: 'home.html'
})

export class HomePage implements OnInit{

	age: number = 50;
	showFasting: boolean = false;
	showCholesterol: boolean = false;

 	constructor(public navCtrl: NavController) {

  	}

  	ngOnInit(): void {

  	}

}
