import PropTypes from "prop-types"
import React from "react"

export default function Badge({ text, icon, color, alt }) {
	return (
		<div
			className={"inline-flex items-center rounded-full border-2 px-3 py-2"}
			style={{ borderColor: color }}
		>
			{icon ? <img src={icon} className="size-6" alt={alt} /> : <></>}
			<p className="pl-2 font-bold">{text}</p>
		</div>
	)
}

Badge.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	icon: PropTypes.string,
	alt: PropTypes.string,
}
