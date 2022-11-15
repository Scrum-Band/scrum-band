import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IdbService } from 'projects/scrum-band/src/app/services/idb/idb.service';
import { IMPROVEMENTS_CONSTANT } from 'projects/scrum-band/src/app/services/idb/improvements/improvements.constant';
import { Improvement } from 'projects/scrum-band/src/app/services/idb/improvements/improvements.interface';

@Component({
	selector: 'sb-improvements',
	templateUrl: './improvements.component.html',
	styleUrls: ['./improvements.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImprovementsComponent implements OnInit {
	constructor(private idb: IdbService) {}

	ngOnInit(): void {}

	improvements: Improvement[] = this.idb.improvements();
}
