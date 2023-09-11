import type { ClickType } from "$lib/types";

const CLICK_SETTINGS_KEY: string = 'click-mode';
const APPEARANCE_SETTINGS_KEY: string = 'appearance-mode';
const THEME_SETTINGS_KEY: string = 'theme-mode';

export const setClickMode = (window: Window, clickType: ClickType = 'single') => {
	window.localStorage.setItem(CLICK_SETTINGS_KEY, clickType);
};

export const getClickMode: (window: Window) => string | null = (window: Window) => {
	let mode = window.localStorage.getItem(CLICK_SETTINGS_KEY);

	return mode;
};

export const setAppearanceMode = (
	window: Window,
	appearanceType: 'dark' | 'light' | 'auto' = 'dark'
) => {
	window.localStorage.setItem(APPEARANCE_SETTINGS_KEY, appearanceType);
};

export const getAppearanceMode: (window: Window) => string = (window: Window) => {
	let mode = window.localStorage.getItem(APPEARANCE_SETTINGS_KEY);

	if (mode === null) {
		setAppearanceMode(window);

		return 'dark';
	}

	return mode;
};

export const setThemeMode = (window: Window, themeMode: string = 'crimson') => {
	window.localStorage.setItem(THEME_SETTINGS_KEY, themeMode);
};

export const getThemeMode: (window: Window) => string = (window: Window) => {
	let mode = window.localStorage.getItem(THEME_SETTINGS_KEY);

	if (mode === null) {
		setThemeMode(window);

		return 'crimson';
	}

	return mode;
};
