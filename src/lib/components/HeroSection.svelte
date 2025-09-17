<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import profileImage from '$lib/assets/iriyanto-profile-2.png';
	import castleBackground from '$lib/assets/medieval-castle-silhouette-in-misty-mountains-skyr.jpg';
	import { identity, heroData } from '$lib/data';
</script>

<section id="home" class="relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Medieval Castle Background -->
	<div
		class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
		style="background-image: url('{castleBackground}')"
	></div>

	<!-- Dark overlay for better text readability -->
	<div
		class="from-surface-900-50-token/70 via-surface-800-100-token/60 to-surface-900-50-token/80 absolute inset-0 bg-gradient-to-b"
	></div>

	<!-- Medieval atmosphere gradient -->
	<div
		class="from-primary-500/20 to-secondary-500/20 absolute inset-0 bg-gradient-to-br via-transparent"
	></div>

	<div class="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<!-- Profile Image -->
		<div class="mb-8">
			<div class="relative inline-block">
				<div
					class="border-primary-500 mx-auto h-32 w-32 overflow-hidden rounded-full border-4 shadow-2xl"
				>
					<Avatar src={profileImage} size="w-32 h-32" name="Iriyanto Profile" />
				</div>
				<div
					class="border-tertiary-500/30 absolute -inset-2 animate-pulse rounded-full border-2"
				></div>
			</div>
		</div>

		<!-- Main Headline -->
		<h1 class="rune-glow mb-6 font-serif text-4xl font-bold text-balance md:text-6xl">
			<span class="text-primary-500">{identity.name}</span>
			<br />
			<span class="text-on-surface-token">Software Engineer</span>
			<!-- <br />
			<span class="text-tertiary-500">& Chronicler of Code</span> -->
		</h1>

		<!-- Subheadline -->
		<p class="text-surface-600-300-token mx-auto mb-8 max-w-3xl text-xl text-pretty md:text-2xl">
			{heroData.subtitle.indonesian}
			<br />
			<span class="text-tertiary-500">{heroData.subtitle.english}</span>
		</p>

		<!-- CTA Buttons -->
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href={heroData.cta.primary.href}
				class="btn btn-lg variant-filled-primary group transform px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
			>
				<Icon
					icon={heroData.cta.primary.icon}
					class="mr-2 h-5 w-5 transition-transform group-hover:rotate-12"
				/>
				{heroData.cta.primary.text}
			</a>

			<a
				href={heroData.cta.secondary.href}
				class="btn btn-lg variant-outline-tertiary group transform px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
			>
				<Icon
					icon={heroData.cta.secondary.icon}
					class="mr-2 h-5 w-5 transition-transform group-hover:rotate-12"
				/>
				{heroData.cta.secondary.text}
			</a>
		</div>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
			<Icon icon="mdi:scroll-text" class="text-primary-500 h-6 w-6" />
		</div>
	</div>
</section>

<style>
	.rune-glow {
		text-shadow: 0 0 20px rgba(var(--color-primary-500), 0.6);
	}

	.font-serif {
		font-family: 'Playfair Display', serif;
	}

	.text-balance {
		text-wrap: balance;
	}

	.text-pretty {
		text-wrap: pretty;
	}

	/* Medieval atmosphere enhancement */
	section {
		position: relative;
	}

	section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image:
			radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
		pointer-events: none;
		z-index: 1;
	}
</style>
