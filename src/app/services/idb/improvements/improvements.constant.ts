import { FeaturesName } from '../features/features.enum';
import { ImprovementsIcon } from './improvements.enum';
import { Improvement } from './improvements.interface';

export const IMPROVEMENTS_CONSTANT: Improvement[] = [
	{
		icon: ImprovementsIcon.init,
		phase: 'improvement.init.phase',
		description: 'improvement.init.description',
		features: [FeaturesName.spm, FeaturesName.dashboard, FeaturesName.teams]
	},
	{
		icon: ImprovementsIcon.planning,
		phase: 'improvement.planning.phase',
		description: 'improvement.planning.description',
		features: [FeaturesName.planningRoom, FeaturesName.groomingRoom]
	},
	{
		icon: ImprovementsIcon.implementation,
		phase: 'improvement.implementation.phase',
		description: 'improvement.implementation.description',
		features: [FeaturesName.dailyRoom, FeaturesName.autoReport]
	},
	{
		icon: ImprovementsIcon.review,
		phase: 'improvement.review.phase',
		description: 'improvement.review.description',
		features: [FeaturesName.reviewRoom, FeaturesName.achievements]
	},
	{
		icon: ImprovementsIcon.retrospective,
		phase: 'improvement.retrospective.phase',
		description: 'improvement.retrospective.description',
		features: [FeaturesName.retrospectiveRoom, FeaturesName.resources]
	},
	{
		icon: ImprovementsIcon.launch,
		phase: 'improvement.launch.phase',
		description: 'improvement.launch.description',
		features: [FeaturesName.history, FeaturesName.dataExport]
	}
];
