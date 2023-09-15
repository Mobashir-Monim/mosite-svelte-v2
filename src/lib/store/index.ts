import type { WindowStateType } from '$lib/types';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const globalDirectorySystemStore: Writable<WindowStateType[]> = writable([]);
export const appMenuVisibility: Writable<boolean> = writable(false);
