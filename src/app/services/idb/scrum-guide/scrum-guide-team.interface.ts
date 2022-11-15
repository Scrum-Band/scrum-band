export interface ScrumGuideTeam {
	title: string;
	intro: string[];
	developers: {
		title: string;
		intro: string;
		skills: {
			intro: string;
			list: string[];
		};
	};
	po: {
		title: string;
		intro: string;
		skills: {
			intro: string;
			list: string[];
		};
		content: string[];
	};
	sm: {
		title: string;
		content: string[];
		serves: [
			{
				title: string;
				list: string[];
			},
			{
				title: string;
				list: string[];
			},
			{
				title: string;
				list: string[];
			}
		];
	};
}
