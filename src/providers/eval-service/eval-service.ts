import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Status, Patient } from '../../models/patient';
import { CustomResponses } from '../../models/responses';

@Injectable()
export class EvalServiceProvider {

	constructor(public http: Http) {}

  	public getAgeEval(age: number): any {

  		if(age < 2) { return CustomResponses.ZERO_TO_ONE; }

  		if(age >= 2 && age <= 19) { return CustomResponses.TWO_TO_NINETEEN; }

  		if(age >= 20 && age <= 24) { return CustomResponses.TWENTY_TO_TWENTYFOUR; }

  		if(age >= 25) { return CustomResponses.TWENTYFIVE_PLUS; }

  	}

  	public getFastingEval(input: any): any {

  		
  	}

}
