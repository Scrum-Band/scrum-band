import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Feature } from '../../../../services/idb/features/features.interface';
import { FeaturesService } from '../features.service';

@Component({
	selector: 'sb-features-chip',
	templateUrl: './chip.component.html',
	styleUrls: ['./chip.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureChipComponent implements OnInit {
	@Input() name: string = '';
	public feature?: Feature;
	constructor(private featuresService: FeaturesService, public translate: TranslateService) {}
	ngOnInit(): void {
		this.feature = this.featuresService.getFeatureByName(this.name);
	}
}
