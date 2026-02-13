import React from "react"
import BadgeGroup from "../BadgeGroup"

export default function TimelineItem({
	date,
	logo,
	logoAlt,
	title,
	company,
	children,
	badges,
	isFirst = false,
	isLast = false,
}) {
	return (
		<div className="inline-flex">
			<div
				className={`flex flex-col items-center pr-8 lg:pr-0 lg:pt-0 ${isFirst ? "pt-16" : ""}`}
			>
				<div className="h-6 w-6 rounded-full bg-green-400"></div>
				<div
					className={`h-full w-1 ${isLast ? "bg-linear-to-b from-green-200 to-transparent" : "bg-green-200"}`}
				></div>
			</div>

			<div className="lg:inline-flex">
				<div className="flex flex-row items-center lg:min-w-72 lg:flex-col lg:px-10">
					<p>{date}</p>
					<img
						src={logo}
						alt={logoAlt}
						className="h-auto w-36 p-6 lg:pt-10"
					/>
				</div>

				<div
					className={`max-w-prose lg:text-xl ${isFirst ? "pb-16" : "pt-6"}`}
				>
					<p className="text-2xl lg:text-4xl">
						<b>{title}</b>
					</p>
					<p className="underline">{company}</p>
					<br />
					{children}
					<br />
					<BadgeGroup badges={badges} />
				</div>
			</div>
		</div>
	)
}
