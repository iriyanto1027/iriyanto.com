<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<GoogleAnalytics />

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<!-- Header -->
	<header>
		<Navbar />
	</header>
	<!-- Main -->
	<main>
		{@render children()}
	</main>
	<!-- Footer -->
	<Footer />
</div>
