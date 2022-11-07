import { Injectable } from "@angular/core";
import { Feature } from "./feature.interface";
import { FEATURES_CONSTANT } from "./features.constants";

@Injectable({
  providedIn: "root",
})
export class FeaturesService {
  features: Feature[] = FEATURES_CONSTANT;

  constructor() {}

  getAllFeatures(): Feature[] {
    return this.features;
  }

  getFeatureByName(name: string): Feature | undefined {
    return this.features.find((f) => f.name == name);
  }

  getFeaturesByNames(names: string[]): Feature[] {
    const result: Feature[] = [] as Feature[];
    this.features.forEach((feature) => {
      if (names.includes(feature.name)) {
        result.push(feature);
      }
    });
    return result;
  }
}
