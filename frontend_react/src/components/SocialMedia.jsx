import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a
				href="https://www.linkedin.com/in/madukasaubhagya"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
		</div>
		<div>
			<a
				href="https://github.com/greyboolean"
				target="_blank"
				rel="noreferrer"
			>
				<BsGithub />
			</a>
		</div>
		<div>
			<a
				href="https://www.hackerrank.com/greyboolean"
				target="_blank"
				rel="noreferrer"
			>
				<FaHackerrank />
			</a>
		</div>
	</div>
);

export default SocialMedia;
