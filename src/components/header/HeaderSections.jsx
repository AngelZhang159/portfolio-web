import SectionButton from "./SectionButton"
import React from "react"
import { sections } from "../../data/headerSections"
import { t } from "i18next"

export default function HeaderSections() {
	return (
		<nav className="absolute left-1/2 -translate-x-1/2 transform text-gray-300">
			<ul className="flex gap-10">
				{sections.map((section) => {
					return (
						<SectionButton key={section} text={t(section)} section={section} />
					)
				})}
			</ul>
		</nav>
	)
}
