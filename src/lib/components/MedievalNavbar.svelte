<script lang="ts">
	import Icon from '@iconify/svelte';
	import { navItems } from '$lib/data';

	// Mobile menu state
	let isOpen = false;

	function toggleMobileMenu() {
		isOpen = !isOpen;
	}

	function closeMobileMenu() {
		isOpen = false;
	}
</script>

<nav
	class="bg-surface-100-800-token/95 border-surface-500/30 fixed inset-x-0 top-0 z-50 w-full border-b backdrop-blur-sm"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<h1 class="text-primary-500 rune-glow font-serif text-2xl font-bold">Iriyanto</h1>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					{#each navItems as item}
						<a
							href={item.href}
							class="group text-on-surface-token hover:text-primary-500 hover:bg-surface-200-700-token/50 flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300"
						>
							<Icon
								icon={item.icon}
								class="group-hover:text-primary-500 mr-2 h-4 w-4 transition-colors"
							/>
							{item.name}
						</a>
					{/each}
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					type="button"
					class="btn btn-sm variant-ghost-surface"
					on:click={toggleMobileMenu}
					aria-label="Toggle mobile menu"
				>
					{#if isOpen}
						<Icon icon="mdi:close" class="h-6 w-6" />
					{:else}
						<Icon icon="mdi:menu" class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isOpen}
		<div class="bg-surface-100-800-token border-surface-500/30 border-t md:hidden">
			<div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
				{#each navItems as item}
					<a
						href={item.href}
						class="group text-on-surface-token hover:text-primary-500 hover:bg-surface-200-700-token/50 flex items-center rounded-md px-3 py-2 text-base font-medium transition-all duration-300"
						on:click={closeMobileMenu}
						role="menuitem"
					>
						<Icon
							icon={item.icon}
							class="group-hover:text-primary-500 mr-3 h-5 w-5 transition-colors"
						/>
						{item.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	.rune-glow {
		text-shadow: 0 0 10px rgba(var(--color-primary-500), 0.5);
	}

	.font-serif {
		font-family: 'Playfair Display', serif;
	}

	/* Add stone texture effect */
	nav {
		position: relative;
	}

	nav::before {
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
	}
</style>
