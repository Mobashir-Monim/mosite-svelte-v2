<script lang="ts">
	import { globalDirectorySystemStore } from '$lib/store';
	import type { UIFileOrFolderType, WindowStateType } from '$lib/types';
	import {} from 'os';
	import DocumentIcon from '../../assets/icons/DocumentIcon.svelte';
	import FolderIcon from '../../assets/icons/FolderIcon.svelte';

	export let webWindowName: string;
	let selectedContent: UIFileOrFolderType | undefined = undefined;
	const unitDivisors = [
		{ unit: 'bit', divisor: 1 },
		{ unit: 'B', divisor: 8 },
		{ unit: 'KB', divisor: 1024 },
		{ unit: 'MB', divisor: 1024 },
		{ unit: 'GB', divisor: 1024 }
	];

	globalDirectorySystemStore.subscribe((value) => {
		const webWindow = value.find((webWindow) => webWindow.name === webWindowName);

		if (webWindow && webWindow?.selected) {
			selectedContent = webWindow.selected;
		}
	});

	const calculateSize: (obj: any) => string = (obj: any) => {
		obj = typeof obj !== 'string' ? JSON.stringify(obj) : obj;
		let length: number = obj.length * 10240;
		let index: number = -1;

		while (length > unitDivisors[index + 1].divisor) {
			length = Math.round(length / unitDivisors[index + 1].divisor);
			index++;
		}

		return `${length} ${unitDivisors[index].unit}`;
	};
</script>

<div
	class="w-[200px] h-full shrink-0 p-2.5 flex flex-col gap-5 text-[0.6rem] bg-surface-300 dark:bg-surface-700/70 text-left"
>
	{#if selectedContent}
		<div class="mx-auto">
			{#if selectedContent.type === 'file'}
				<DocumentIcon size={80} />
			{:else}
				<FolderIcon size={80} />
			{/if}
		</div>
		<div class="flex flex-col gap-0 leading-4">
			<div
				class="line-clamp-2 text-[0.8rem] font-normal border-b border-gray-600 dark:border-white/50"
			>
				{selectedContent.name}
			</div>
			<div class="line-clamp-2 text-[0.7rem] opacity-70 font-normal">
				{selectedContent.type === 'folder' ? 'MDir Folder' : 'MDoc File'} - {calculateSize(
					selectedContent.type === 'folder' ? selectedContent.contents : selectedContent
				)}
			</div>
		</div>
		<div class="flex flex-col gap-0 leading-4">
			<div
				class="line-clamp-2 text-[0.8rem] font-normal border-b border-gray-600 dark:border-white/50"
			>
				Information
			</div>
			<div
				class="flex flex-row gap-2 border-b border-gray-600 dark:border-white/50 justify-between"
			>
				<div class="w-[50%] shrink-0 line-clamp-1 text-opacity-70">Author</div>
				<div class="line-clamp-1 font-normal">M. Monim</div>
			</div>
			<div
				class="flex flex-row gap-2 border-b border-gray-600 dark:border-white/50 justify-between"
			>
				<div class="w-[50%] shrink-0 line-clamp-1 text-opacity-70">Permission</div>
				<div class="line-clamp-1 font-normal">644</div>
			</div>
			<div
				class="flex flex-row gap-2 border-b border-gray-600 dark:border-white/50 justify-between"
			>
				<div class="w-[50%] shrink-0 line-clamp-1 text-opacity-70">Type</div>
				<div class="line-clamp-1 font-normal">
					{selectedContent.type[0].toUpperCase()}{selectedContent.type.slice(1)}
				</div>
			</div>
			<div
				class="flex flex-row gap-2 border-b border-gray-600 dark:border-white/50 justify-between"
			>
				<div class="w-[50%] shrink-0 line-clamp-1 text-opacity-70">Items</div>
				<div class="line-clamp-1 font-normal">
					{selectedContent.type === 'file' ? 'N/A' : selectedContent.contents.length}
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-0 leading-4">
			<div
				class="line-clamp-2 text-[0.8rem] font-normal border-b border-gray-600 dark:border-white/50"
			>
				Tag
			</div>
			<div class="line-clamp-2 text-[0.7rem] opacity-70 font-normal break-words">
				{selectedContent.specialization_type ?? 'N/A'}
			</div>
		</div>
	{/if}
</div>
