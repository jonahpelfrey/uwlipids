import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Patient, Status } from '../../models/patient';

@Component({
	selector: 'page-home',
  	templateUrl: 'home.html',
})

export class HomePage implements OnInit{

	age: number = 50;
	ageSubmitted: boolean = false;
	ageStyle = {
		'text-default': true,
		'text-warning': false,
		'text-valid': false
	};

 	constructor(public navCtrl: NavController) {

  	}

  	ngOnInit(): void {

  	}

  	validateAge(): void {

  		this.ageSubmitted = true;

  		if(this.age < 2 || this.age >= 25) {
  			this.ageStyle = {
  				'text-default': false,
				'text-warning': true,
				'text-valid': false
  			}
  		}
  		else {
  			this.ageStyle = {
  				'text-default': false,
				'text-warning': false,
				'text-valid': true
  			}
  		}
  		
  	}

  	resetAge(): void {
  		this.age = 50;
  		this.ageSubmitted = false;
  		this.ageStyle = {
  			'text-default': true,
  			'text-warning': false,
  			'text-valid': false
  		};
  	}

}
