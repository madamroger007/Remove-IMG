import { withCatch } from '@tfkhdyt/with-catch';
import { imageSchema } from './schema/image-schema';

export const removeBg = async (images: FileList | undefined) => {
	if (!images) throw new Error('not request to images');

	const payload = imageSchema.array().safeParse(Array.from(images));
	if (!payload.success) {
		throw payload.error;
	}

	const form = new FormData();
	for (const image of payload.data) {
		form.append('image', image);
	}

	const [err, resp] = await withCatch(
		fetch('/api/remove-bg', {
			method: 'POST',
			body: form
		})
	);
	if (err) {
		throw err;
	}

	const [errData, data] = await withCatch(resp.json());
	if (errData) {
		throw errData;
	}

	if (!resp.ok) {
		throw new Error(data.message as string);
	}

	return data as { images: string[]; creditsAmount: number | undefined };
};
