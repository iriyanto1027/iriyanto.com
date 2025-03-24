<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import profileImage from '$lib/assets/iriyanto-profile.avif';
	import brandLogo from '$lib/assets/logo-brand-iriyanto-mini-nobg.avif';

	const identity = {
		name: 'Iriyanto',
		profession: 'Software Engineer',
		headline: `Hail, traveler. I am well-versed in the backend arts of NestJS and Laravel, now exploring new frontiers with Svelte. For five years, I have forged scalable systems and led warriors of code. Now, I seek to build an open-source stronghold—where knowledge flows, innovation thrives, and our legacy stands eternal. &#128293;`,
		quote: `Zin los dii, coder! May your open-source legacy be sung in the halls of Devhalla! &#127984;` // (Zin los dii = "Honor is mine" – seperti menyatakan bahwa menulis kode hebat adalah suatu kehormatan)
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
	<meta name="description" content="Portfolio Website for Iriyanto" />
	<meta name="keywords" content="iriyanto,portfolio" />
	<meta name="author" content="Iriyanto" />
</svelte:head>

<div class="mx-auto max-w-5xl">
	<main class="mx-auto max-w-3xl p-10">
		<section id="identity" class="mt-7">
			<div class="flex items-center justify-center gap-3">
				<Avatar size="w-24 md:w-32 md:h-32" src={profileImage} name="Iriyanto Image Profile"
				></Avatar>
				<div class="px-2 sm:px-0">
					<h1 class="text-2xl font-semibold md:text-3xl">{identity.name}</h1>
					<h2 class="text-lg md:text-2xl">{identity.profession}</h2>
				</div>
			</div>
		</section>
		<br />
		<section id="headline">
			<div class="card card-hover from-primary-600 to-tertiary-600 bg-gradient-to-br p-4">
				<p class="font-medium text-slate-900 sm:text-sm md:text-base">
					{@html identity.headline}
				</p>
			</div>
			<div class="p-5">
				<blockquote class="blockquote sm:text-sm md:text-base">
					{@html identity.quote}
				</blockquote>
			</div>
		</section>
		<section id="sosial" class="flex items-center justify-center gap-3">
			{#each socials as social}
				<a
					class="btn-icon btn-icon-lg variant-filled"
					href={social.link}
					target="_blank"
					aria-label={social.name}><Icon icon={social.icon} width="32" height="32" /></a
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
				<p>Venture forth and behold the creations I have forged in code.</p>
			</div>
			<div class="mt-5 flex flex-wrap justify-center gap-5">
				{#if false}
					{#each projects as project}
						<div class="card border-1 sm:max-w-80">
							<header class="card-header flex justify-center pt-4">
								<img
									class="relative aspect-[16/9] w-[300px] max-w-full overflow-hidden"
									src={project.imageUrl}
									alt={project.name}
								/>
							</header>
							<section class="p-4">
								<h2 class="h2">{project.name}</h2>
								<p class="text-sm">{project.description}</p>
								<div class="mt-5 flex flex-wrap justify-center gap-1">
									{#each project.techStacks as techStack}
										<span class="badge preset-filled-primary-500 font-semibold">{techStack}</span>
									{/each}
								</div>
							</section>
							<footer class="card-footer">
								<a
									class="btn-icon btn-icon-lg !bg-transparent"
									href="https://github.com/iriyanto1027"
									><Icon icon="emojione-monotone:right-arrow" width="30" height="30" /></a
								>
							</footer>
						</div>
					{/each}
				{:else}
					<div class="my-10 flex items-center justify-center py-10">
						<p class="text-md text-center">
							No projects have been forged yet, but the journey has just begun. Stay tuned!
						</p>
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
				<p>Insights, ideas, and experiences—delve into my latest writings.</p>
			</div>

			<div class="mt-5 flex flex-wrap justify-center gap-5">
				{#if false}
					{#each projects as project}
						<div class="card border-1 sm:max-w-80">
							<header class="card-header flex justify-center pt-4">
								<img
									class="relative aspect-[16/9] w-[300px] max-w-full overflow-hidden"
									src={project.imageUrl}
									alt={project.name}
								/>
							</header>
							<section class="p-4">
								<h2 class="h2">{project.name}</h2>
								<p class="text-sm">{project.description}</p>
								<div class="mt-5 flex flex-wrap justify-center gap-1">
									{#each project.techStacks as techStack}
										<span class="badge preset-filled-primary-500 font-semibold">{techStack}</span>
									{/each}
								</div>
							</section>
							<footer class="card-footer">
								<a
									class="btn-icon btn-icon-lg !bg-transparent"
									href="https://github.com/iriyanto1027"
									><Icon icon="emojione-monotone:right-arrow" width="30" height="30" /></a
								>
							</footer>
						</div>
					{/each}
				{:else}
					<div class="my-10 flex items-center justify-center py-10">
						<p class="text-md text-center">
							No tales have been written yet, but soon, the scrolls shall be filled. Stay tuned!
						</p>
					</div>
				{/if}
			</div>
		</section>
	</main>
	<footer
		class="mx-auto w-full max-w-3xl space-y-10 p-4 py-16 text-xs md:p-12 md:py-24 md:text-base"
	>
		<!-- Section 1 -->
		<section
			class="flex flex-col items-center justify-center space-y-5 md:flex-row md:items-start md:space-y-0"
		>
			<div class="grid grid-cols-1 place-content-center place-items-center gap-2">
				<img width="40px" height="40px" src={brandLogo} alt="Logo Brand Iriyanto" />
				<p class="!text-sm opacity-80">Build with SvelteKit, Tailwind and Skeleton</p>
			</div>
		</section>
		<hr class="opacity-50" />
		<!-- Section 2 -->
		<section
			class="flex flex-col items-center justify-between space-y-4 md:flex-row md:items-start md:space-y-0"
		>
			<p>
				<a class="anchor" href="{base}/" target="_blank" rel="noreferrer"> Blog </a>
				<span class="mx-2 opacity-10">|</span>
				<a class="anchor" href="{base}/" target="_blank" rel="noreferrer"> Tools </a>
			</p>
			<div class="flex gap-3">
				{#each socials as social}
					<a
						class="btn-icon btn-icon-lg variant-filled opacity-75 hover:opacity-100"
						href={social.link}
						target="_blank"
						aria-label={social.name}><Icon icon={social.icon} width="32" height="32" /></a
					>
				{/each}
			</div>
		</section>
		<section class="flex justify-center">
			<p class="flex items-center gap-1 !text-lg opacity-80">
				Made with <Icon icon="mdi:love" width="24" height="24" color="#d10202" /> by Iriyanto - &copy;
				{currentYear}
			</p>
		</section>
	</footer>
</div>
