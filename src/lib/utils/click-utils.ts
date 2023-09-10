const KEY: string = 'click-mode';

export const setClickMode = (window: Window, clickType: 'single' | 'double' = 'single') => {
	window.localStorage.setItem(KEY, clickType);
};

export const getClickMode: (window: Window) => string | null = (window: Window) => {
	let mode = window.localStorage.getItem(KEY);

	if (mode === null) {
		setClickMode(window, 'double');

		return 'double';
	}

	return mode;
};
