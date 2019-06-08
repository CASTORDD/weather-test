import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()

export class CityService {
	public url: string;
	public api_key: string;
	public name: string;

	constructor(
		private _http: Http
	){
		this.url = GLOBAL.url;
		this.api_key = GLOBAL.api_key;
		this.name = localStorage.getItem('name');
	}

	getCity(){
		return this._http.get(this.url+'find?q=' + this.name + '&units=metric&appid=' + this.api_key)
			.map(res =>res.json());
	}

	weatherCity(id){
		return this._http.get(this.url+'weather?id=' + id + '&units=metric&appid=' + this.api_key)
			.map(res =>res.json());
	}
	fiveDays(id){
		return this._http.get(this.url+'forecast?id=' + id + '&units=metric&appid=' + this.api_key + '&cnt=5')
			.map(res =>res.json());
	}
}
