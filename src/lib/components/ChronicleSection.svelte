<script lang="ts">
	import Icon from '@iconify/svelte';
	import { timeline, skills } from '$lib/data';
</script>

<section id="chronicle" class="bg-surface-100-900/20 parchment-texture scroll-mt-5 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="text-primary-500 rune-glow mb-6 font-serif text-4xl font-bold md:text-5xl">
				The Chronicle
			</h2>
			<p class="text-primary-100/75 mx-auto max-w-3xl text-xl text-pretty">
				A tale of growth, learning, and mastery in the ever-evolving realm of software development.
				Each chapter marks a new level of expertise gained through countless quests and challenges.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Timeline -->
			<div>
				<h3 class="mb-8 flex items-center font-serif text-2xl font-bold">
					<Icon icon="mdi:scroll-text" class="text-primary-500 mr-3 h-6 w-6" />
					Journey Through Time
				</h3>

				<div class="space-y-8">
					{#each timeline as item}
						<div class="relative">
							<div
								class="card bg-surface-100-900/80 border {item.current
									? '!border-primary-500 shadow-lg'
									: ''} transition-all duration-300 hover:shadow-xl"
							>
								<section class="p-6">
									<div class="flex items-start space-x-4">
										<!-- Icon -->
										<div
											class="flex h-12 w-12 items-center justify-center rounded-full {item.current
												? 'bg-primary-500 text-white'
												: 'bg-surface-400 text-surface-100'}"
										>
											<Icon icon={item.icon || 'mdi:cog'} class="h-6 w-6" />
										</div>

										<!-- Content -->
										<div class="flex-1">
											<div class="mb-2 flex items-center justify-between">
												<h4 class="font-serif text-lg font-bold">
													{item.title}
												</h4>
												{#if item.current}
													<span class="badge preset-filled-primary-500">Current</span>
												{/if}
											</div>

											<div class="text-primary-100/75 mb-2 space-y-1 text-sm">
												<div class="flex items-center">
													<Icon icon="mdi:calendar" class="mr-2 h-4 w-4" />
													{item.year}
												</div>
												<div class="flex items-center">
													<Icon icon="mdi:map-marker" class="mr-2 h-4 w-4" />
													{item.company} • {item.location}
												</div>
											</div>

											<p class="text-primary-100/75 mb-4">{item.description}</p>

											<div class="flex flex-wrap gap-2">
												{#each item.technologies as tech}
													<span
														class="badge !preset-outlined-tertiary-500 text-tertiary-500 hover:!preset-filled-tertiary-500 text-xs"
													>
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
				<h3 class="mb-8 flex items-center font-serif text-2xl font-bold">
					<Icon icon="mdi:lightning-bolt" class="text-primary-500 mr-3 h-6 w-6" />
					Arsenal of Skills
				</h3>

				<div class="space-y-6">
					{#each skills as skillGroup}
						<div
							class="card bg-surface-100-900/80 hover:!border-primary-500 border transition-all duration-300"
						>
							<section class="p-6">
								<h4 class="mb-4 font-serif text-lg font-semibold">
									{skillGroup.category}
								</h4>
								<div class="flex flex-wrap gap-2">
									{#each skillGroup.skills as skill}
										<span
											class="badge preset-tonal-primary hover:preset-filled-primary-500 cursor-default transition-all duration-300"
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
