import { Component } from '@angular/core';

import { ICar } from "../../models/car";
import { cars } from '../../data/cars';

@Component({
	selector: 'app-car-list',
	templateUrl: './car-list.component.html',
	styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
	cars: ICar[] = cars;

	query: string;

	carName(car: ICar): string {
		return car.make + " " + car.model;
	}

	removeCar(car: ICar): void {
		this.cars.splice(this.cars.indexOf(car), 1);
	}
}
