<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import profileImage from '$lib/assets/iriyanto-profile.avif';
	import brandLogo from '$lib/assets/logo-brand-iriyanto-nobg.avif';

	const identity = {
		name: 'Iriyanto',
		profession: 'Software Engineer',
		headline: `Hi, I'm Iriyanto—a Software Engineer who believes that great technology starts with great code. Let's build something amazing together!`
	};

	const socials = [
		{
			name: 'Email',
			icon: 'iconamoon:email-light',
			link: 'mailto:iriyanto1027@gmail.com'
		},
		{
			name: 'Linkedin',
			icon: 'mdi:linkedin',
			link: 'https://www.linkedin.com/in/iriyanto'
		},
		{
			name: 'Github',
			icon: 'mdi:github',
			link: 'https://github.com/iriyanto1027'
		}
	];

	const projects = [
		{
			name: 'Judul',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			imageUrl: 'https://picsum.photos/300/160',
			link: 'https://github.com/iriyanto1027',
			techStacks: ['Svelte', 'Sveltekit', 'Skeleton']
		},
		{
			name: 'Judul',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			imageUrl: 'https://picsum.photos/300/160',
			link: 'https://github.com/iriyanto1027',
			techStacks: ['Svelte', 'Sveltekit', 'Skeleton']
		},
		{
			name: 'Judul',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			imageUrl: 'https://picsum.photos/300/160',
			link: 'https://github.com/iriyanto1027',
			techStacks: ['Svelte', 'Sveltekit', 'Skeleton']
		}
	];

	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<title>Iriyanto</title>
	<meta name="description" content="This is where the description goes for SEO" />
	<meta name="keywords" content="Iriyanto" />
	<meta name="author" content="Iriyanto" />
</svelte:head>

<div class="max-w-5xl mx-auto">
	<main class="max-w-3xl mx-auto p-10">
		<section id="identity" class="mt-7">
			<div class="flex gap-3 justify-center items-center">
				<Avatar width="w-32 sm:w-24" src={profileImage} alt="Iriyanto Image Profile"></Avatar>
				<div class="px-2 sm:px-0">
					<h1 class="text-3xl font-semibold">{identity.name}</h1>
					<h2 class="text-2xl">{identity.profession}</h2>
				</div>
			</div>
		</section>
		<br />
		<section id="headline">
			<div class="card p-4 text-md">
				{identity.headline}
			</div>
		</section>
		<section id="sosial" class="flex gap-3 justify-center mt-5">
			{#each socials as social}
				<a
					class="btn-icon btn-icon-sm variant-filled"
					href={social.link}
					target="_blank"
					aria-label={social.name}><Icon icon={social.icon} width="24" height="24" /></a
				>
			{/each}
		</section>
		<br />
		<hr class="!border-t-2" />
		<br />
		<br />
		<section id="project">
			<h1 class="h1">Projects</h1>
			<div class="mt-1">
				<p>Explore my work and see what I&rsquo;ve been developing.</p>
			</div>
			<div class="flex flex-wrap mt-5 gap-5 justify-center">
				{#if false}
					{#each projects as project}
						<div class="card sm:max-w-80">
							<header class="card-header flex justify-center">
								<img
									class="w-[300px] max-w-full aspect-[16/9] overflow-hidden relative"
									src={project.imageUrl}
									alt={project.name}
								/>
							</header>
							<section class="p-4">
								<h2 class="h2">{project.name}</h2>
								<p class="text-sm">{project.description}</p>
								<div class="mt-5 flex flex-wrap gap-1 justify-center">
									{#each project.techStacks as techStack}
										<span class="badge variant-filled-primary font-normal">{techStack}</span>
									{/each}
								</div>
							</section>
							<footer class="card-footer">
								<a class="btn-icon !bg-transparent" href="https://github.com/iriyanto1027"
									><Icon icon="emojione-monotone:right-arrow" width="30" height="30" /></a
								>
							</footer>
						</div>
					{/each}
				{:else}
					<div class="flex my-10 py-10 justify-center items-center">
						<p class="text-md text-center">No projects yet, but stay tuned!</p>
					</div>
				{/if}
			</div>
		</section>
		<br />
		<hr class="!border-t-2" />
		<br />
		<br />
		<section id="post">
			<h1 class="h1">Posts</h1>
			<div class="mt-1">
				<p>Insights, ideas, and experiences—read my latest blog posts.</p>
			</div>

			<div class="flex flex-wrap mt-5 gap-5 justify-center">
				{#if false}
					{#each projects as project}
						<div class="card sm:max-w-80">
							<header class="card-header flex justify-center">
								<img
									class="w-[300px] max-w-full aspect-[16/9] overflow-hidden relative"
									src={project.imageUrl}
									alt={project.name}
								/>
							</header>
							<section class="p-4">
								<h2 class="h2">{project.name}</h2>
								<p class="text-sm">{project.description}</p>
								<div class="mt-5 flex flex-wrap gap-1 justify-center">
									{#each project.techStacks as techStack}
										<span class="badge variant-filled-primary font-normal">{techStack}</span>
									{/each}
								</div>
							</section>
							<footer class="card-footer">
								<a class="btn-icon !bg-transparent" href="https://github.com/iriyanto1027"
									><Icon icon="emojione-monotone:right-arrow" width="30" height="30" /></a
								>
							</footer>
						</div>
					{/each}
				{:else}
					<div class="flex my-10 py-10 justify-center items-center">
						<p class="text-md text-center">No blog posts yet, but stay tuned for updates!</p>
					</div>
				{/if}
			</div>
		</section>
	</main>
	<footer
		class="w-full max-w-3xl mx-auto p-4 py-16 md:p-12 md:py-24 space-y-10 text-xs md:text-base"
	>
		<!-- Section 1 -->
		<section
			class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0"
		>
			<div
				class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start"
			>
				<img width="40px" height="40px" src={brandLogo} alt="Logo Brand Iriyanto" />
				<p class="!text-sm opacity-80">Build with SvelteKit, Tailwind and Skeleton</p>
				<!-- Current Version -->
				<span class="badge variant-soft">v1.0.0</span>
			</div>
			<div class="hidden grid-cols-3 gap-8">
				<div class="space-y-6">
					<h6 class="h6">Explore</h6>
					<ul class="space-y-3">
						<li><a class="anchor" href="/docs/introduction">Introduction</a></li>
						<li><a class="anchor" href="/docs/get-started">Get Started</a></li>
						<li><a class="anchor" href="/blog">Blog</a></li>
					</ul>
				</div>
				<div class="space-y-6">
					<h6 class="h6">Features</h6>
					<ul class="space-y-3">
						<li><a class="anchor" href="/elements/core">Tailwind</a></li>
						<li><a class="anchor" href="/actions/clipboard">Svelte</a></li>
						<li><a class="anchor" href="/utilities/codeblocks">Utilities</a></li>
					</ul>
				</div>
				<div class="space-y-6">
					<h6 class="h6">Project</h6>
					<ul class="space-y-3">
						<li>
							<a
								class="anchor"
								href="https://github.com/skeletonlabs"
								target="_blank"
								rel="noreferrer">Github Organization</a
							>
						</li>
						<li>
							<a
								class="anchor"
								href="https://www.npmjs.com/org/skeletonlabs"
								target="_blank"
								rel="noreferrer">NPM Organization</a
							>
						</li>
						<li>
							<a
								class="anchor"
								href="https://www.npmjs.com/package/@skeletonlabs/skeleton"
								target="_blank"
								rel="noreferrer">NPM Package</a
							>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<hr class="opacity-50" />
		<!-- Section 2 -->
		<section
			class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0"
		>
			<p>
				<a class="anchor" href="{base}/blog" target="_blank" rel="noreferrer"> Blog </a>
				<span class="opacity-10 mx-2">|</span>
				<a class="anchor" href="{base}/tools" target="_blank" rel="noreferrer"> Tools </a>
			</p>
			<div class="flex gap-6">
				{#each socials as social}
					<a
						class="btn-icon btn-icon-sm variant-filled opacity-75 hover:opacity-100"
						href={social.link}
						target="_blank"
						aria-label={social.name}><Icon icon={social.icon} width="24" height="24" /></a
					>
				{/each}
			</div>
		</section>
		<section class="flex justify-center">
			<p class="!text-lg opacity-80 flex items-center gap-1">
				Made with <Icon icon="mdi:love" width="24" height="24" color="#d10202" /> by Iriyanto - &copy;
				{currentYear}
			</p>
		</section>
	</footer>
</div>
