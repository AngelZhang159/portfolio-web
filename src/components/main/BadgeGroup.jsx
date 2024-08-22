import React from "react"
import Badge from "./Badge"
import PropTypes from "prop-types"

export default function BadgeGroup({ badges }) {
	return (
		<div className="flex flex-wrap gap-4 py-8">
			{badges.map((badge) => {
				return (
					<Badge
						key={badge.text}
						color={badge.color}
						icon={badge.icon}
						text={badge.text}
						alt={badge.alt}
					/>
				)
			})}
		</div>
	)
}

const badgePropType = PropTypes.shape({
	text: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	color: PropTypes.string,
})

const badgesPropType = PropTypes.arrayOf(badgePropType).isRequired

BadgeGroup.propTypes = {
	badges: badgesPropType,
}
