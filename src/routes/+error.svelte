<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} {page.error?.message} - Iriyanto</title>
	<meta name="description" content="{page.status} {page.error?.message} - Iriyanto" />
	<meta name="keywords" content="Iriyanto" />
	<meta name="author" content="Iriyanto" />
</svelte:head>

<section class="flex h-screen items-center justify-center bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
		<div class="mx-auto max-w-screen-sm text-center">
			<h1
				class="text-primary-600 dark:text-primary-100/750 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl"
			>
				{page.status}
			</h1>
			<p
				class="dark:text-primary-100/75 mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
			>
				{page.error?.message}
			</p>
			<a
				href="/"
				class="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 text-primary-100/75 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:ring-4 focus:outline-none"
				>Back to Homepage</a
			>
		</div>
	</div>
</section>
