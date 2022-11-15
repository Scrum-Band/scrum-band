import { Injectable } from '@angular/core';

import { Feature } from './features/features.interface';
import { FEATURES_CONSTANT } from './features/features.constant';
import { Improvement } from './improvements/improvements.interface';
import { IMPROVEMENTS_CONSTANT } from './improvements/improvements.constant';

@Injectable({
	providedIn: 'root'
})
export class IdbService {
	constructor() {}

	public features(): Feature[] {
		return FEATURES_CONSTANT;
	}
	public improvements(): Improvement[] {
		return IMPROVEMENTS_CONSTANT;
	}
}
