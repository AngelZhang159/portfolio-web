import React from "react"
import PropTypes from "prop-types"
import { sections } from "../../data/headerSections"
import SectionButton from "../header/SectionButton"
import { t } from "i18next"

export default function SectionMobile({ onClick }) {
	return (
		<div className="w-full md:block md:w-auto" id="target">
			<ul className="flex flex-col items-center justify-center gap-10 pt-10 text-xl font-bold">
				{sections.map((section) => {
					return (
						<SectionButton
							key={section}
							text={t(section)}
							section={section}
							onClick={onClick}
						/>
					)
				})}

				<hr className="border-white" />
			</ul>
		</div>
	)
}

SectionMobile.propTypes = {
	onClick: PropTypes.func.isRequired,
}
