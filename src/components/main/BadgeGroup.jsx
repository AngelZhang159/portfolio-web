import React from "react";
import Badge from "./Badge"

export default function BadgeGroup({ badges }) {
	return (
		<div className="flex flex-wrap gap-4 py-8">
			{badges.map(badge => {
				return <Badge key={badge.text} color={badge.color} icon={badge.icon} text={badge.text} />
			})}
		</div>
	)
}