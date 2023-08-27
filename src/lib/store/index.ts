import type { DirectoryStateType } from '$lib/types';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const globalDirectorySystemStore: Writable<DirectoryStateType[]> = writable([], );
