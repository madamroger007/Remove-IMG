<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet<[]>;
	};

	let { children }: Props = $props();
</script>

<main class="mx-auto flex min-h-screen flex-col px-4 lg:container md:px-6 lg:px-8">
	<div class="flex-grow py-8">
		<Header />
		<div class="py-8">
			{@render children()}
		</div>
		<Footer />

	</div>
</main>
