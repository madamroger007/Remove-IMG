<script lang="ts">
	import HamburgerIcon from "$lib/icons/hamburger-icon.svelte";
	import GiftIcon from "$lib/icons/gift-icon.svelte";
	import DonationIcon from "$lib/icons/donate-icon.svelte";
	import SupportIcon from "$lib/icons/support-icon.svelte";
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import Sidebar from "./sidebar.svelte";
	import { page } from "$app/stores";

	let isOpen = $state(false);

	function handleToggle() {
		isOpen = !isOpen;
	}

	$effect(() => {
		if ($page) {
			isOpen = false;
		}
	});
</script>

<header class="flex items-center justify-between pb-4">
	<div>
		<a class="h2 flex items-center font-bold" href="/">
			<div class="mr-2 flex items-center">
				<img
					src="favicon.png"
					alt="Remove MIG"
					class="w-32 dark:drop-shadow-[1px_2px_20px_rgba(255,244,254,0.3)]"
				/>
			</div>
		</a>
		<h2
			class="h6 text-gray-600 dark:text-gray-300 font-light dark:drop-shadow-[1px_1px_2px_rgba(255,244,254,0.3)]"
		>
			Remove Background Image
		</h2>
	</div>
	<div class="hidden items-center space-x-8 lg:flex">
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
		<LightSwitch />
	</div>
	<div class="flex items-center space-x-4 lg:hidden">
		<button onclick={handleToggle} aria-label="Menu">
			<HamburgerIcon class="size-10" />
		</button>
	</div>
</header>

<Sidebar {isOpen} {handleToggle} />
