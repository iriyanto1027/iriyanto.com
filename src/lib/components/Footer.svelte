<script lang="ts">
	import Icon from '@iconify/svelte';
	import { footerData } from '$lib/data';

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-surface-100-900 border-surface-500/30 stone-texture border-t">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="text-center">
			<!-- Logo -->
			<div class="mb-6">
				<h3 class="text-primary-500 rune-glow font-serif text-2xl font-bold">
					{footerData.name}
				</h3>
				<p class="text-primary-100/50 mt-2">{footerData.profession}</p>
			</div>

			<!-- Decorative Elements -->
			<div class="mb-6 flex items-center justify-center space-x-4">
				<div class="bg-primary-500 h-0.5 w-16"></div>
				<Icon icon="mdi:scroll-text" class="text-primary-500 h-6 w-6" />
				<div class="bg-primary-500 h-0.5 w-16"></div>
			</div>

			<!-- Quote -->
			<blockquote class="text-primary-100/50 mx-auto mb-6 max-w-2xl font-serif text-lg italic">
				"{footerData.quote}"
			</blockquote>

			<!-- Copyright -->
			<div class="text-primary-100/50 flex flex-wrap items-center justify-center space-x-2 text-sm">
				<span>© {currentYear} Iriyanto. Crafted with</span>
				<Icon icon="mdi:heart" class="h-4 w-4 text-red-500" />
				<span>and</span>
				<Icon icon="mdi:code-tags" class="text-primary-500 h-4 w-4" />
				<span>in the digital realm.</span>
			</div>

			<!-- Additional Info -->
			<div class="text-primary-100/50 mt-4 text-xs">
				<p>
					Built with {footerData.techStack} • Hosted in the cloud realms of {footerData.hosting}
				</p>
			</div>
		</div>
	</div>
</footer>
