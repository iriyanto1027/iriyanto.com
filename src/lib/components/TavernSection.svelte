<script lang="ts">
	import Icon from '@iconify/svelte';

	interface FormData {
		name: string;
		email: string;
		subject: string;
		message: string;
	}

	let formData: FormData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		// Reset form
		formData = { name: '', email: '', subject: '', message: '' };
	};

	const socialLinks = [
		{
			name: 'GitHub',
			icon: 'mdi:github',
			url: 'https://github.com/iriyanto',
			color: 'hover:text-surface-400'
		},
		{
			name: 'LinkedIn',
			icon: 'mdi:linkedin',
			url: 'https://linkedin.com/in/iriyanto',
			color: 'hover:text-blue-400'
		},
		{
			name: 'Twitter',
			icon: 'mdi:twitter',
			url: 'https://twitter.com/iriyanto',
			color: 'hover:text-sky-400'
		},
		{
			name: 'Email',
			icon: 'mdi:email',
			url: 'mailto:hello@iriyanto.com',
			color: 'hover:text-red-400'
		}
	];
</script>

<section id="tavern" class="stone-texture py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="text-primary rune-glow mb-6 text-4xl font-bold md:text-5xl">The Tavern</h2>
			<p class="text-token-content-tertiary mx-auto max-w-3xl text-xl text-pretty">
				Welcome, fellow adventurer! Pull up a chair by the fire and let's share tales of code and
				collaboration. Whether you seek a quest companion or wish to commission an artifact, all are
				welcome here.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Form -->
			<div class="card bg-surface-100-800-token/90 border-surface-300-600-token shadow-xl">
				<header class="card-header">
					<h3 class="h3 text-token-content-primary flex items-center">
						<Icon icon="mdi:message-text" class="text-primary mr-3 h-6 w-6" />
						Send a Message
					</h3>
					<p class="text-token-content-secondary">
						Share your quest details and let's forge something amazing together.
					</p>
				</header>
				<section class="p-4">
					<form on:submit={handleSubmit} class="space-y-6">
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<label class="label">
								<span class="text-token-content-primary font-medium">Name</span>
								<input
									class="input"
									type="text"
									bind:value={formData.name}
									placeholder="Your name"
									required
								/>
							</label>
							<label class="label">
								<span class="text-token-content-primary font-medium">Email</span>
								<input
									class="input"
									type="email"
									bind:value={formData.email}
									placeholder="your.email@example.com"
									required
								/>
							</label>
						</div>

						<label class="label">
							<span class="text-token-content-primary font-medium">Subject</span>
							<input
								class="input"
								type="text"
								bind:value={formData.subject}
								placeholder="What's your quest about?"
								required
							/>
						</label>

						<label class="label">
							<span class="text-token-content-primary font-medium">Message</span>
							<textarea
								class="textarea resize-none"
								bind:value={formData.message}
								placeholder="Tell me about your project, ideas, or just say hello..."
								rows="6"
								required
							></textarea>
						</label>

						<button
							type="submit"
							class="btn variant-filled-primary w-full transform font-semibold transition-all duration-300 hover:scale-105"
						>
							<Icon icon="mdi:send" class="mr-2 h-5 w-5" />
							Send Message
						</button>
					</form>
				</section>
			</div>

			<!-- Contact Info & Social Links -->
			<div class="space-y-8">
				<!-- Contact Info -->
				<div class="card bg-surface-100-800-token/90 border-surface-300-600-token">
					<header class="card-header">
						<h3 class="h4 text-token-content-primary flex items-center">
							<Icon icon="mdi:map-marker" class="text-primary mr-3 h-5 w-5" />
							Guild Information
						</h3>
					</header>
					<section class="space-y-4 p-4">
						<div class="text-token-content-secondary flex items-center">
							<Icon icon="mdi:email" class="text-primary mr-3 h-5 w-5" />
							<span>hello@iriyanto.com</span>
						</div>
						<div class="text-token-content-secondary flex items-center">
							<Icon icon="mdi:map-marker" class="text-primary mr-3 h-5 w-5" />
							<span>Jakarta, Indonesia (Remote Available)</span>
						</div>
						<div class="pt-4">
							<p class="text-token-content-secondary text-sm">
								Available for freelance projects, consulting, and full-time opportunities. Response
								time: Usually within 24 hours.
							</p>
						</div>
					</section>
				</div>

				<!-- Social Links -->
				<div class="card bg-surface-100-800-token/90 border-surface-300-600-token">
					<header class="card-header">
						<h3 class="h4 text-token-content-primary">Connect Across Realms</h3>
						<p class="text-token-content-secondary">Find me on these digital pathways</p>
					</header>
					<section class="p-4">
						<div class="grid grid-cols-2 gap-4">
							{#each socialLinks as link}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="btn variant-outline-surface group border-surface-300-600-token hover:border-primary/50 transform transition-all duration-300 hover:scale-105 {link.color}"
								>
									<Icon
										icon={link.icon}
										class="mr-2 h-5 w-5 transition-transform group-hover:scale-110"
									/>
									{link.name}
								</a>
							{/each}
						</div>
					</section>
				</div>

				<!-- Call to Action -->
				<div class="card bg-primary/10 border-primary/30">
					<section class="p-6 text-center">
						<h3 class="text-primary mb-2 text-lg font-bold">Ready to Begin Your Quest?</h3>
						<p class="text-token-content-secondary mb-4 text-sm">
							Let's discuss how we can bring your digital vision to life with the power of modern
							web technologies.
						</p>
						<button class="btn variant-filled-primary"> Start Your Adventure </button>
					</section>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.stone-texture {
		background-image:
			radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
			radial-gradient(circle at 40% 80%, rgba(120, 219, 226, 0.15) 0%, transparent 50%);
		background-attachment: fixed;
	}

	.rune-glow {
		text-shadow:
			0 0 5px rgba(var(--color-primary-500), 0.5),
			0 0 10px rgba(var(--color-primary-500), 0.3),
			0 0 15px rgba(var(--color-primary-500), 0.1);
		animation: runeGlow 3s ease-in-out infinite alternate;
	}

	@keyframes runeGlow {
		from {
			text-shadow:
				0 0 5px rgba(var(--color-primary-500), 0.5),
				0 0 10px rgba(var(--color-primary-500), 0.3),
				0 0 15px rgba(var(--color-primary-500), 0.1);
		}
		to {
			text-shadow:
				0 0 8px rgba(var(--color-primary-500), 0.8),
				0 0 15px rgba(var(--color-primary-500), 0.5),
				0 0 20px rgba(var(--color-primary-500), 0.2);
		}
	}
</style>
