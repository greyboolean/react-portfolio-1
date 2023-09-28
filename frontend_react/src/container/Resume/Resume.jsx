import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Resume.scss';

const Resume = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [resumes, setResumes] = useState([]);

	useEffect(() => {
		const query =
			'*[_type == "resumes"] {"resumeURL": resumeFile.asset->url, resumeImage, title}';

		client.fetch(query).then((data) => {
			setResumes(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				Take a Look at my <span>Resume</span>
			</h2>

			{resumes.length > 0 && (
				<>
					<div className="app__resume-item app__flex">
						<a href={resumes[0].resumeURL}>Resume</a>
						<img src={urlFor(resumes[0].resumeImage)} alt={resumes[0].title} />
						<div className='resume-overlay'></div>
						{console.log(resumes)}
					</div>
				</>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Resume, 'app__resume'),
	'resume',
	'app__primarybg'
);
