<script lang="ts">
	import CloseIcon from "$lib/icons/close-icon.svelte";
	import SupportIcon from "$lib/icons/support-icon.svelte";
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import clsx from "clsx";
	import { fade } from "svelte/transition";
	import GiftIcon from "$lib/icons/gift-icon.svelte";
	import DonationIcon from "$lib/icons/donate-icon.svelte";

	type Props = {
		isOpen: boolean;
		handleToggle: () => void;
	};

	let { isOpen, handleToggle }: Props = $props();
</script>

<!-- backdrop -->
{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- eslint-disable-next-line svelte/valid-compile -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-40 bg-black/35"
		onclick={handleToggle}
		transition:fade={{ duration: 300 }}
	></div>
{/if}

<div
	class={clsx(
		"fixed inset-y-0 right-0 z-50 w-64 space-y-3 bg-surface-100 p-4 shadow-lg transition-all duration-300 dark:bg-surface-900",
		isOpen ? "translate-x-0" : "translate-x-full",
	)}
>
	<button onclick={handleToggle} class="ml-auto" aria-label="close">
		<CloseIcon class="size-5" />
	</button>
	<div class="w-full space-y-5 pt-4">
		<a
			href="https://trakteer.id/adam_setiadi/link"
			target="_blank"
			class="flex gap-2 items-center hover:text-gray-600 dark:hover:text-gray-300"
		>
			<SupportIcon class="mr-2 size-5" />
			<p class="font-bold text-lg">Support</p>
		</a>
		<a
			href="https://trakteer.id/adam_setiadi/link"
			target="_blank"
			class="flex gap-2 items-center hover:text-gray-600 dark:hover:text-gray-300"
		>
			<DonationIcon class="mr-2 size-5" />
			<p class="font-bold text-lg">Donation</p>
		</a>
		<a
			href="https://trakteer.id/adam_setiadi/link"
			target="_blank"
			class="flex gap-2 items-center hover:text-gray-600 dark:hover:text-gray-300"
		>
			<GiftIcon class="mr-2 size-5" />
			<p class="font-bold text-lg">Gift</p>
		</a>
		<div class="flex items-center justify-between rounded px-4 py-2">
			Tema
			<LightSwitch />
		</div>
	</div>
</div>
