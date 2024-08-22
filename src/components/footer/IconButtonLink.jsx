import React from "react"
import PropTypes from "prop-types"

export default function IconButtonLink({ link, image, alt }) {
	return (
		<a
			className="flex scale-125 items-center rounded-full bg-white"
			referrerPolicy="no-referrer"
			rel="noreferrer"
			target="_blank"
			href={link}
		>
			<img src={image} className="scale-90" alt={alt} />
		</a>
	)
}

IconButtonLink.propTypes = {
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}
