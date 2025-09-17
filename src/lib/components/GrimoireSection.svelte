<script lang="ts">
	import Icon from '@iconify/svelte';
	import { blogPosts } from '$lib/data';

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<section id="grimoire" class="bg-surface-100-800-token/30 stone-texture py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="text-primary-500 rune-glow mb-6 font-serif text-4xl font-bold md:text-5xl">
				The Grimoire
			</h2>
			<p class="text-surface-600-300-token mx-auto max-w-3xl text-xl text-pretty">
				Chronicles of code, wisdom from the digital realm, and tales of software craftsmanship. Each
				entry is a spell of knowledge, carefully inscribed for fellow adventurers.
			</p>
		</div>

		<!-- Blog Posts Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each blogPosts as post, index}
				<div
					class="card card-hover group bg-surface-100-800-token/80 border-surface-500/30 hover:border-primary-500/50 parchment-texture transform border transition-all duration-300 hover:scale-105"
				>
					<div class="relative overflow-hidden rounded-t-lg">
						<img
							src={post.image || 'https://picsum.photos/300/200'}
							alt={post.title}
							class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="absolute top-4 left-4">
							<span class="badge variant-filled-primary">
								{post.category}
							</span>
						</div>
					</div>

					<header class="card-header">
						<h3
							class="h4 text-on-surface-token group-hover:text-primary-500 font-serif font-bold transition-colors"
						>
							{post.title}
						</h3>
						<p class="text-surface-600-300-token">{post.description}</p>
					</header>

					<section class="p-4">
						<div class="text-surface-600-300-token mb-4 flex items-center justify-between text-sm">
							<div class="flex items-center">
								<Icon icon="mdi:calendar" class="mr-2 h-4 w-4" />
								{formatDate(post.date)}
							</div>
							<span>{post.readTime}</span>
						</div>

						<button
							class="btn variant-ghost-primary group/btn hover:variant-filled-primary w-full justify-between transition-all"
						>
							<span class="flex items-center">
								<Icon icon="mdi:book-open-variant" class="mr-2 h-4 w-4" />
								Read Chronicle
							</span>
							<Icon
								icon="mdi:arrow-right"
								class="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
							/>
						</button>
					</section>
				</div>
			{/each}
		</div>

		<!-- View All Button -->
		<div class="mt-12 text-center">
			<button class="btn btn-lg variant-outline-primary">
				<Icon icon="mdi:book-open-variant" class="mr-2 h-5 w-5" />
				Explore All Chronicles
			</button>
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

	.text-pretty {
		text-wrap: pretty;
	}

	/* Stone texture effect */
	.stone-texture {
		position: relative;
	}

	.stone-texture::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image:
			radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.05) 0%, transparent 50%),
			radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.05) 0%, transparent 50%);
		pointer-events: none;
		z-index: 0;
	}

	/* Parchment texture for cards */
	.parchment-texture {
		position: relative;
		background-image:
			radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 20%),
			radial-gradient(circle at 80% 80%, rgba(176, 224, 230, 0.1) 0%, transparent 20%),
			radial-gradient(circle at 40% 40%, rgba(255, 253, 150, 0.1) 0%, transparent 20%);
	}

	.parchment-texture::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			linear-gradient(
				90deg,
				transparent 79px,
				rgba(var(--color-surface-500), 0.1) 79px,
				rgba(var(--color-surface-500), 0.1) 81px,
				transparent 81px
			),
			linear-gradient(rgba(var(--color-surface-500), 0.05) 50%, transparent 50%);
		background-size: 82px 4px;
		pointer-events: none;
		border-radius: inherit;
	}
</style>
