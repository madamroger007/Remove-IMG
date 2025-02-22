import { z } from 'zod';

const supportedImageTypes = ['image/jpeg', 'image/png', 'image/webp'];
const maximumImageSize = 10_000_000;

export const imageSchema = z
	.instanceof(File)
	.refine((file) => supportedImageTypes.includes(file.type), 'Image type not supported')
	.refine(
		(file) => file.size <= maximumImageSize,
		'Image size is too large, cannot be more than 10MB'
	);
