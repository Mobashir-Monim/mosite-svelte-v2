<script lang="ts">
	import type { SocialItemType } from '$lib/data/about-me';
	import EmailIcon from '../../../assets/icons/EmailIcon.svelte';
	import FacebookIcon from '../../../assets/icons/FacebookIcon.svelte';
	import GithubIcon from '../../../assets/icons/GithubIcon.svelte';
	import LinkedInIcon from '../../../assets/icons/LinkedInIcon.svelte';
	import TwitterIcon from '../../../assets/icons/TwitterIcon.svelte';

	export let social: SocialItemType;

	const socialIcons: any = {
		facebook: {
			icon: FacebookIcon,
			props: { size: 30 }
		},
		twitter: {
			icon: TwitterIcon,
			props: { size: 30 }
		},
		github: {
			icon: GithubIcon,
			props: { size: 30 }
		},
		linkedin: {
			icon: LinkedInIcon,
			props: { size: 30 }
		},
		email: {
			icon: EmailIcon,
			props: { size: 30, circle: true }
		}
	};
</script>

<a class="" href={social.link} target="_blank">
	<svelte:component this={socialIcons[social.label].icon} {...socialIcons[social.label].props} />
</a>
