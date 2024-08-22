import PropTypes from "prop-types"
import React from "react"

export default function SectionTitle({ children, toColor, fromColor }) {
	return (
		<p
			className={`pb-16 text-4xl font-bold lg:text-7xl ${toColor} ${fromColor} bg-gradient-to-br bg-clip-text text-transparent`}
		>
			{"< "}
			{children}
			{" />"}
		</p>
	)
}

SectionTitle.propTypes = {
	children: PropTypes.node.isRequired,
	toColor: PropTypes.string,
	fromColor: PropTypes.string,
}
