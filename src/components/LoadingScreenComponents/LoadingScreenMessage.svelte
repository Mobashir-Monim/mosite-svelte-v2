<script lang="ts">
	export let loadingStatusWidth: number;

	$: messageIndex =
		loadingStatusWidth <= 0
			? 0
			: loadingStatusWidth >= 100
			? 20
			: Math.round(loadingStatusWidth / 20 - 1);

	const loadingMessages: string[] = [
		'Power On Self Test (POST) in progress',
		'Detecting hardware components',
		'Initializing CPU',
		'Checking RAM',
		'Detecting storage devices',
		'Loading bootloader',
		'Starting BIOS',
		'Verifying hardware configuration',
		'Initializing I/O ports',
		'Preparing to boot operating system',
		'Booting in safe mode',
		'Loading drivers',
		'Configuring network settings',
		'Starting services',
		'Initializing graphics',
		'Checking disk for errors',
		'Scanning for bootable devices',
		'Loading system files',
		'Performing system integrity check',
		'Completing boot sequence'
	];
</script>

<p class="mx-auto text-[0.8rem]">{loadingMessages[Math.min(Math.max(messageIndex, 0), 19)]}...</p>
