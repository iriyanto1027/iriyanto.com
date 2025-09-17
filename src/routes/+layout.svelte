<script lang="ts">
	import MedievalNavbar from '$lib/components/MedievalNavbar.svelte';
	import MedievalFooter from '$lib/components/MedievalFooter.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<main class="min-h-screen">
	<MedievalNavbar />
	{@render children()}
	<MedievalFooter />
</main>
