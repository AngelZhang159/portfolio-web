import React from "react";
import PropTypes from 'prop-types';

export default function IconButtonLink({ link, image }) {
	return (
		<a className="bg-white scale-125 rounded-full items-center flex" referrerPolicy="no-referrer" rel="noreferrer" target="_blank" href={link}>
			<img src={image} className="scale-90" />
		</a>
	)
}

IconButtonLink.propTypes = {
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};