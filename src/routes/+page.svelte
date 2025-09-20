<script lang="ts">
	import ArtifactsSection from '$lib/components/ArtifactsSection.svelte';
	import ChronicleSection from '$lib/components/ChronicleSection.svelte';
	import GrimoireSection from '$lib/components/GrimoireSection.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import TavernSection from '$lib/components/TavernSection.svelte';
</script>

<svelte:head>
	<title>Iriyanto - Software Engineer</title>
	<meta
		name="description"
		content="Personal portfolio of Iriyanto, a software engineer who crafts digital artifacts like a blacksmith forges swords."
	/>
	<meta name="keywords" content="iriyanto,portfolio" />
	<meta name="author" content="Iriyanto" />
</svelte:head>

<HeroSection />

<ArtifactsSection />

<GrimoireSection />

<ChronicleSection />

<TavernSection />
