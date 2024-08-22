import IconButtonLink from "./IconButtonLink"
import { contact } from "../../data/contact"
import React from "react"
import { t } from "i18next"

export default function MadeByMe() {
	return (
		<div className="flex flex-col items-center justify-center self-center">
			<p className="pb-4 text-center">{t("website-made-by-me")}</p>

			<div className="inline-flex justify-center gap-8">
				{contact.map((link) => {
					return (
						<IconButtonLink
							key={link.name}
							link={link.link}
							image={link.image}
							alt={link.alt}
						/>
					)
				})}
			</div>
		</div>
	)
}
