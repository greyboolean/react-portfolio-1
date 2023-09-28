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
			'*[_type == "resumes"] {"resumeURL": resumeFile.asset->url}';

		client.fetch(query).then((data) => {
			setResumes(data);
		});
	}, []);

	return (
		<>
			{resumes.length > 0 && (
				<>
					<div className="app__resume-item app__flex">
						<a href={resumes[0].resumeURL}>download</a>
						<a
							href={resumes[0].resumeURL}
							target="_blank"
							rel="noopener noreferrer"
						>
							View
						</a>
						{/* <img
							// src={urlFor(resume.resumeImages[currentIndex])}
							alt={`page ${currentIndex}`}
						/>

						<div className="app__resume-content">
              <p className="p-text">I am a backend developer with a passion for building beautiful and functional web application. I am a backend developer with a passion for building beautiful and functional web application.</p>
              <div>
                <h4 className="bold-text">Michael</h4>
                <h5 className="p-text">Google</h5>
              </div>
            </div> */}
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
