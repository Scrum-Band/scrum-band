import { Injectable } from '@angular/core';
import { Feature } from '../../../services/idb/features/features.interface';
import { IdbService } from '../../../services/idb/idb.service';

@Injectable({
	providedIn: 'root'
})
export class FeaturesService {
	constructor(private idb: IdbService) {}

	getAllFeatures(): Feature[] {
		return this.idb.features();
	}

	getFeatureByName(name: string): Feature | undefined {
		return this.idb.features().find((f) => f.name == name);
	}

	getFeaturesByNames(names: string[]): Feature[] {
		const result: Feature[] = [] as Feature[];
		this.idb.features().forEach((feature) => {
			if (names.includes(feature.name)) {
				result.push(feature);
			}
		});
		return result;
	}
}
