export default {
	name: 'resumes',
	title: 'Resumes',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'resumeFile',
			title: 'Resume File',
			type: 'file',
		},
		{
			name: 'resumeImage',
			title: 'Resume Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
