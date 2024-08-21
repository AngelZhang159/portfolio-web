import SectionButton from "./SectionButton";
import React from "react";
import { sections } from "../../data/headerSections"
import { t } from "i18next";

export default function HeaderSections() {

	return (
		<nav className='text-gray-300 absolute left-1/2 transform -translate-x-1/2 '>
			<ul className="gap-10 flex">
				{sections.map(section => {
					return <SectionButton key={section} text={t(section)} section={section} />
				})}
			</ul>
		</nav>
	)
}