import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { CityService } from '../../services/city.service';
import { City } from '../../models/Cities';

@Component ({
	selector: 'list',
	templateUrl: './list.component.html',
	providers: [ CityService ]
})

export class ListComponent implements OnInit {
	@Input() name: string;
	public list = [];
	public search;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _cityServices: CityService
	){
		this.list = [];
	}

	ngOnInit(){
		this._cityServices.getCity().subscribe(
			response => {
				if(!response.list){
					this.list = response.list;
				} else {
					this.list = response.list;
				}
			},
			error => {
				console.log(<any>error)
			}
		);
	}
}
