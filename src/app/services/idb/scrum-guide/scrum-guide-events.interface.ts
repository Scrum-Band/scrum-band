export interface ScrumGuideEvents {
	title: string;
	intro: string[];
	sprint: {
		title: string;
		intro: string[];
		list: {
			title: string;
			content: string[];
		};
		content: string[];
	};
	planning: {
		title: string;
		intro: string[];
		topics: {
			title: string;
			content: string[];
		}[];
		content: string[];
	};
	daily: {
		title: string;
		content: string[];
	};
	review: {
		title: string;
		content: string[];
	};
	retrospective: {
		title: string;
		content: string[];
	};
}
