import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CityComponent } from './components/city/city.component';

const appRoutes: Routes = [
	{
		path: '',
		component: ListComponent
	},
	{
		path: 'list',
		component: ListComponent
	},
	{
		path: 'city/:id',
		component: CityComponent
	}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );