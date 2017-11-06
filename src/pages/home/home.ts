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
	ageValid: boolean = false;
	ageStyle = {
		'text-default': true,
		'text-warning': false,
		'text-valid': false
	};

	fastingValid: boolean = false;
	fastingSelected: boolean = false;
	fastingStyle = {
		'text-default': true,
		'text-warning': false,
		'text-valid': false
	};

	cholesterolStyle = {
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
  			this.ageValid = true;
  			this.ageStyle = {
  				'text-default': false,
				'text-warning': false,
				'text-valid': true
  			}
  		}
  		
  	};

  	validateFasting(): void {
  		this.fastingSelected = true;
  		this.fastingValid = true;

  		this.fastingStyle = {
  			'text-default': false,
			'text-warning': false,
			'text-valid': true
  		}
  	};

  	validateCholesterol(): void {
  		this.cholesterolStyle = {
			'text-default': false,
			'text-warning': false,
			'text-valid': true
		};

  	}

  	resetAge(): void {
  		this.age = 50;

  		this.ageSubmitted = false;
  		this.ageValid = false;
  		this.fastingSelected = false;
  		this.fastingValid = false;

  		this.ageStyle = {
  			'text-default': true,
  			'text-warning': false,
  			'text-valid': false
  		};
  	}

  	resetFasting(): void {
  		this.fastingSelected = false;
  		this.fastingValid = false;
  	}

}

