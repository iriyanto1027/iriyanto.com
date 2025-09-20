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

<section id="grimoire" class="bg-surface-100-900 stone-texture scroll-mt-5 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="text-primary-500 rune-glow mb-6 font-serif text-4xl font-bold md:text-5xl">
				The Grimoire
			</h2>
			<p class="text-primary-100/75 mx-auto max-w-3xl text-xl text-pretty">
				Chronicles of code, wisdom from the digital realm, and tales of software craftsmanship. Each
				entry is a spell of knowledge, carefully inscribed for fellow adventurers.
			</p>
		</div>

		<!-- Blog Posts Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each blogPosts as post}
				<div
					class="card card-hover group bg-surface-100-900/80 hover:!border-primary-500 parchment-texture transform border transition-all duration-300 hover:scale-105"
				>
					<div class="relative overflow-hidden rounded-t-lg">
						<img
							src={post.image || 'https://picsum.photos/300/200'}
							alt={post.title}
							class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						<div class="absolute top-4 left-4">
							<span class="badge preset-filled-primary-300-700">
								{post.category}
							</span>
						</div>
					</div>

					<header class="p-4">
						<h3 class="h4 group-hover:text-primary-500 font-serif font-bold transition-colors">
							{post.title}
						</h3>
						<p class="text-primary-100/75">{post.description}</p>
					</header>

					<section class="p-4">
						<div class="text-primary-100/75 mb-4 flex items-center justify-between text-sm">
							<div class="flex items-center">
								<Icon icon="mdi:calendar" class="mr-2 h-4 w-4" />
								{formatDate(post.date)}
							</div>
							<span>{post.readTime}</span>
						</div>

						<a
							href={post.url || '#'}
							class="btn preset-tonal-primary group/btn hover:preset-filled-primary-500 w-full justify-between transition-all"
						>
							<span class="flex items-center">
								<Icon icon="mdi:book-open-variant" class="mr-2 h-4 w-4" />
								Read Chronicle
							</span>
							<Icon
								icon="mdi:arrow-right"
								class="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
							/>
						</a>
					</section>
				</div>
			{/each}
		</div>

		<!-- View All Button -->
		<div class="mt-12 text-center">
			<a
				class="btn btn-lg !preset-outlined-primary-500 text-primary-500 hover:!bg-primary-500 hover:!text-white"
				href="https://blog.iriyanto.com"
				target="_blank"
				rel="noopener"
			>
				<Icon icon="mdi:book-open-variant" class="mr-2 h-5 w-5" />
				Explore All Chronicles
			</a>
		</div>
	</div>
</section>
