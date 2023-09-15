import { appMenuVisibility } from '.';

export const toggleAppMenuVisibility: () => void = () => {
	let isVisible: boolean = false;

	appMenuVisibility.subscribe((val) => {
		isVisible = val;
	});

	appMenuVisibility.set(!isVisible);
};
