import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { CityService } from '../../services/city.service';
import { City } from '../../models/Cities';

@Component ({
	selector: 'five',
	templateUrl: './five.component.html',
	providers: [ CityService ]
})

export class FiveComponent implements OnInit {
	public days;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _cityServices: CityService
	){

	}

	ngOnInit(){
		this.fiveDays();
	}
	
	newHeight(){
		document.querySelector('.jumbotron')
	}
  
	fiveDays(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._cityServices.fiveDays(id).subscribe(
				response => {
					if(!response.list){
						this._router.navigate(['/']);
					} else {
						this.days = response.list;
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		})
	}
}
