import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Resume.scss';

const Resume = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [resumes, setResumes] = useState([]);
	// const [brands, setBrands] = useState([]);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const query = '*[_type == "resumes"]';
		// const brandsQuery = '*[_type == "brands"]';

		client.fetch(query).then((data) => {
			setResumes(data);
		});

		// client.fetch(brandsQuery).then((data) => {
		//   setBrands(data);
		// });
	}, []);

	return (
		<>
			{resumes.map((resume) => (
      <>
				<div className="app__resume-item app__flex">
					<img
						src={urlFor(resume.resumeImages[currentIndex])}
						alt={`page ${currentIndex}`}
					/>

					{/* <div className="app__resume-content">
              <p className="p-text">I am a backend developer with a passion for building beautiful and functional web application. I am a backend developer with a passion for building beautiful and functional web application.</p>
              <div>
                <h4 className="bold-text">Michael</h4>
                <h5 className="p-text">Google</h5>
              </div>
            </div> */}
				</div>

				<div className="app__resume-btns app__flex">
					<div
						className="app__flex"
						onClick={() =>
							handleClick(
								currentIndex === 0
									? resume.resumeImages.length - 1
									: currentIndex - 1
							)
						}
					>
						<HiChevronLeft />
					</div>

					<div
						className="app__flex"
						onClick={() =>
							handleClick(
								currentIndex === resume.resumeImages.length - 1
									? 0
									: currentIndex + 1
							)
						}
					>
						<HiChevronRight />
					</div>
				</div>
			</>))}

			{/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
		</>
	);
};

export default AppWrap(
	MotionWrap(Resume, 'app__resume'),
	'resume',
	'app__primarybg'
);
