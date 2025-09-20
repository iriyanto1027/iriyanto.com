<script lang="ts">
	import Icon from '@iconify/svelte';
	import { artifactProjects } from '$lib/data';

	function getStatusVariant(status: string): string {
		switch (status) {
			case 'Live':
				return 'preset-filled-success-300-700';
			case 'Beta':
				return 'preset-filled-warning-300-700';
			case 'Development':
				return 'preset-filled-secondary-300-700';
			default:
				return 'preset-filled-surface-300-700';
		}
	}

	function getProjectIcon(iconName: string): string {
		const iconMap: Record<string, string> = {
			Shield: 'mdi:shield',
			Zap: 'mdi:lightning-bolt',
			Cpu: 'mdi:cpu-64-bit'
		};
		return iconMap[iconName] || 'mdi:cog';
	}
</script>

<section id="artifacts" class="bg-surface-50-950 scroll-mt-5 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2
				class="text-primary-500 rune-glow mb-6 inline-block px-4 py-2 font-serif text-4xl font-bold md:text-5xl"
			>
				Sacred Artifacts
			</h2>
			<p class="text-primary-100/75 mx-auto max-w-3xl text-xl text-pretty">
				Behold the digital artifacts forged in the fires of creativity and tempered with the wisdom
				of experience. Each creation tells a story of challenges overcome and solutions discovered.
			</p>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
			{#each artifactProjects as project, index}
				<div
					class="card card-hover group bg-surface-100-900/90 hover:!border-primary-500 transform overflow-hidden border transition-all duration-500 hover:scale-105 hover:shadow-2xl"
				>
					<!-- Project Image -->
					<div class="relative overflow-hidden">
						<img
							src={project.image || 'https://picsum.photos/400/250?random=' + index}
							alt={project.title}
							class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
						></div>

						<!-- Status Badge -->
						<div class="absolute top-4 right-4">
							<span class="badge {getStatusVariant(project.status)} text-white">
								{project.status}
							</span>
						</div>

						<!-- Project Icon -->
						<div class="absolute bottom-4 left-4">
							<div
								class="bg-primary-500/90 flex h-12 w-12 items-center justify-center rounded-full"
							>
								<Icon icon={getProjectIcon(project.icon)} class="h-6 w-6 text-white" />
							</div>
						</div>
					</div>

					<header class="p-4">
						<h3 class="h4 group-hover:text-primary-500 font-serif font-bold transition-colors">
							{project.title}
						</h3>
						<p class="text-primary-100/75">{project.description}</p>
					</header>

					<section class="space-y-4 p-4">
						<!-- Technologies -->
						<div>
							<h4 class=" mb-2 text-sm font-semibold">Forged With:</h4>
							<div class="flex flex-wrap gap-2">
								{#each project.technologies as tech}
									<span
										class="badge text-tertiary-500 !preset-outlined-tertiary-400-600 hover:!preset-filled-tertiary-500 text-xs"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>

						<!-- Features -->
						<div>
							<h4 class=" mb-2 text-sm font-semibold">Enchantments:</h4>
							<ul class="text-primary-100/75 space-y-1 text-sm">
								{#each project.features as feature}
									<li class="flex items-center">
										<span class="bg-primary-500 mr-2 h-1.5 w-1.5 rounded-full"></span>
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<!-- Action Buttons -->
						<div class="flex gap-2 pt-4">
							<a
								href={project.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-sm preset-filled-primary-300-700 flex-1"
							>
								<Icon icon="mdi:open-in-new" class="mr-2 h-4 w-4" />
								View Quest
							</a>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="btn btn-sm !preset-outlined-tertiary-400-600"
							>
								<Icon icon="mdi:github" class="h-4 w-4" />
							</a>
						</div>
					</section>
				</div>
			{/each}
		</div>

		<!-- Call to Action -->
		<div class="mt-16 text-center">
			<p class="text-primary-100/75 mb-6 text-lg">
				Interested in commissioning a custom artifact for your realm?
			</p>
			<a href="#tavern" class="btn btn-lg preset-filled-primary-300-700">
				<Icon icon="mdi:shield" class="mr-2 h-5 w-5" />
				Begin Your Quest
			</a>
		</div>
	</div>
</section>
