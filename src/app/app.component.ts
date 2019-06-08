import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@Input() name: string;

	constructor(
		private router: Router
	){

	}
	
	mostrarCity(){
	}
	saveCity(){
		localStorage.setItem('name', this.name);
		this.router.navigate(['/list']);	
	}
}
