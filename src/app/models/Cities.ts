import { Weather } from './Weather';
import { Main } from './Main';
import { Sys } from './Sys';
export class City {
	
	constructor(
		public id: string,
		public name: string,
		public weather: Weather[],
		public base: string,
		public main: Main[],
		public dt: string,
		public sys: Sys[],

	) {
		   
	}
}