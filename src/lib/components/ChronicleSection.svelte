<script lang="ts">
	import Icon from '@iconify/svelte';
	import { timeline, skills } from '$lib/data';

	function getTimelineIcon(iconName: string): string {
		const iconMap: Record<string, string> = {
			Sword: 'mdi:sword',
			Shield: 'mdi:shield',
			Zap: 'mdi:lightning-bolt'
		};
		return iconMap[iconName] || 'mdi:cog';
	}
</script>

<section id="chronicle" class="bg-surface-100-800-token/20 parchment-texture py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="text-primary-500 rune-glow mb-6 font-serif text-4xl font-bold md:text-5xl">
				The Chronicle
			</h2>
			<p class="text-surface-600-300-token mx-auto max-w-3xl text-xl text-pretty">
				A tale of growth, learning, and mastery in the ever-evolving realm of software development.
				Each chapter marks a new level of expertise gained through countless quests and challenges.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Timeline -->
			<div>
				<h3 class="text-on-surface-token mb-8 flex items-center font-serif text-2xl font-bold">
					<Icon icon="mdi:scroll-text" class="text-primary-500 mr-3 h-6 w-6" />
					Journey Through Time
				</h3>

				<div class="space-y-8">
					{#each timeline as item, index}
						<div class="relative">
							<!-- Timeline Line -->
							{#if index !== timeline.length - 1}
								<div class="bg-surface-500/30 absolute top-12 left-6 h-16 w-0.5"></div>
							{/if}

							<div
								class="card bg-surface-100-800-token/80 border-surface-500/30 border {item.current
									? 'border-primary-500/50 shadow-lg'
									: ''} transition-all duration-300 hover:shadow-xl"
							>
								<section class="p-6">
									<div class="flex items-start space-x-4">
										<!-- Icon -->
										<div
											class="flex h-12 w-12 items-center justify-center rounded-full {item.current
												? 'bg-primary-500 text-white'
												: 'bg-surface-200-700-token text-surface-700-200-token'}"
										>
											<Icon icon={getTimelineIcon(item.icon)} class="h-6 w-6" />
										</div>

										<!-- Content -->
										<div class="flex-1">
											<div class="mb-2 flex items-center justify-between">
												<h4 class="text-on-surface-token font-serif text-lg font-bold">
													{item.title}
												</h4>
												{#if item.current}
													<span class="badge variant-filled-primary">Current</span>
												{/if}
											</div>

											<div class="text-surface-600-300-token mb-2 space-y-1 text-sm">
												<div class="flex items-center">
													<Icon icon="mdi:calendar" class="mr-2 h-4 w-4" />
													{item.year}
												</div>
												<div class="flex items-center">
													<Icon icon="mdi:map-marker" class="mr-2 h-4 w-4" />
													{item.company} • {item.location}
												</div>
											</div>

											<p class="text-surface-600-300-token mb-4">{item.description}</p>

											<div class="flex flex-wrap gap-2">
												{#each item.technologies as tech}
													<span class="badge variant-outline-tertiary text-xs">
														{tech}
													</span>
												{/each}
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Skills -->
			<div>
				<h3 class="text-on-surface-token mb-8 flex items-center font-serif text-2xl font-bold">
					<Icon icon="mdi:lightning-bolt" class="text-primary-500 mr-3 h-6 w-6" />
					Arsenal of Skills
				</h3>

				<div class="space-y-6">
					{#each skills as skillGroup, index}
						<div
							class="card bg-surface-100-800-token/80 border-surface-500/30 hover:border-primary-500/30 border transition-all duration-300"
						>
							<section class="p-6">
								<h4 class="text-on-surface-token mb-4 font-serif text-lg font-semibold">
									{skillGroup.category}
								</h4>
								<div class="flex flex-wrap gap-2">
									{#each skillGroup.skills as skill}
										<span
											class="badge variant-soft-primary hover:variant-filled-primary cursor-default transition-all duration-300"
										>
											{skill}
										</span>
									{/each}
								</div>
							</section>
						</div>
					{/each}
				</div>
			</div>
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

	/* Parchment texture effect */
	.parchment-texture {
		position: relative;
		background-image:
			radial-gradient(circle at 10% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 20%),
			radial-gradient(circle at 80% 80%, rgba(176, 224, 230, 0.05) 0%, transparent 20%),
			radial-gradient(circle at 40% 40%, rgba(255, 253, 150, 0.05) 0%, transparent 20%);
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
				rgba(var(--color-surface-500), 0.05) 79px,
				rgba(var(--color-surface-500), 0.05) 81px,
				transparent 81px
			),
			linear-gradient(rgba(var(--color-surface-500), 0.03) 50%, transparent 50%);
		background-size: 82px 4px;
		pointer-events: none;
	}
</style>
