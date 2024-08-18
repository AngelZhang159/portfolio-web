import PropTypes from 'prop-types';
import React from "react";

export default function SectionButton({ text, section }) {

	const handleClick = (e) => {
		e.preventDefault();
		const targetSection = document.getElementById(section);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<a href={`#${section}`} className='hover:scale-110 transition-transform hover:text-white' onClick={handleClick}>
			{text}
		</a >
	)
}

SectionButton.propTypes = {
	text: PropTypes.string.isRequired,
	section: PropTypes.string.isRequired
}