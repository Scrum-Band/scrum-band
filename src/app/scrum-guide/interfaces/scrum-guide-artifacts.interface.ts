export interface ScrumGuideArtifacts {
	title: string;
	intro: string;
	commitments: {
		title: string;
		content: string[];
	};
	content: string[];
	productBacklog: {
		title: string;
		intro: string[];
		commitment: {
			title: string;
			content: string[];
		};
	};
	sprintBacklog: {
		title: string;
		content: string[];
		commitment: {
			title: string;
			content: string[];
		};
	};
	increment: {
		title: string;
		content: string[];
		commitment: {
			title: string;
			content: string[];
		};
	};
}
