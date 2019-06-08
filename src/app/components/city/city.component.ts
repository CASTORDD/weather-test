import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { CityService } from '../../services/city.service';
import { City } from '../../models/Cities';

@Component ({
	selector: 'city',
	templateUrl: './city.component.html',
	providers: [ CityService ]
})

export class CityComponent implements OnInit {
	@Input() cidade: string;
	public city: City[];
	public days;
	public country;
	public newHeight = true;



	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _cityServices: CityService
	){
		this.city = [];
	}

	ngOnInit(){
		this.weatherCity();
		this.newHeight = true;
	}

	

	weatherCity(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._cityServices.weatherCity(id).subscribe(
				response => {
					if(!response){
						this._router.navigate(['/']);
					} else {
						this.city = response;
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		})
	}
}
