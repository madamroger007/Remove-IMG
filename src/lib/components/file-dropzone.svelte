<script lang="ts">
	import FileUploadIcon from '$lib/icons/file-upload-icon.svelte';
	import { FileDropzone } from '@skeletonlabs/skeleton';

	type Props = {
		images: FileList | undefined;
		multiple: boolean;
	};

	let { images = $bindable(), multiple }: Props = $props();
</script>

<FileDropzone
	name="files"
	bind:files={images}
	{multiple}
	accept=".jpg, .jpeg, .png, .webp"
	id="file-upload"
>
	<svelte:fragment slot="lead"
		><FileUploadIcon width="3em" height="3em" class="mx-auto" /></svelte:fragment
	>
	<svelte:fragment slot="message"><strong>Choose a file Image</strong> or drag and drop</svelte:fragment>
	<svelte:fragment slot="meta">Type Image : JPEG, PNG, and WebP (Max 10MB)</svelte:fragment>
</FileDropzone>
