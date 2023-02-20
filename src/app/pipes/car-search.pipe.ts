import { Pipe, PipeTransform } from '@angular/core';

import { ICar } from "../models/car";

@Pipe({
	name: 'carSearch'
})
export class CarSearchPipe implements PipeTransform {
	transform(cars: ICar[], query: string): ICar[] {
		if (!query) {
			return cars;
		}
		if (!cars) {
			return [];
		}

		return cars.filter(car => this.carName(car).toLowerCase().includes(query.toLowerCase()));
	}

	carName(car: ICar): string {
		return car.make + " " + car.model;
	}
}