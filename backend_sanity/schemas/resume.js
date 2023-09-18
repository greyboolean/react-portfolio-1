export default {
	name: 'resumes',
	title: 'Resumes',
	type: 'document',
	fields: [
		{
			name: 'resumeFile',
			title: 'Resume File',
			type: 'file',
		},
		{
			name: 'resumeImages',
			title: 'Resume Images',
			type: 'array',
			of: [
				{
					name: 'resumeImage',
					title: 'Resume Image',
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		},
	],
};
