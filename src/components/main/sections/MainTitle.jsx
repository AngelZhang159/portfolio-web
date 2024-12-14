import React from "react"
import { t } from "i18next"
import Badge from "../Badge"
import SectionFrame from "../SectionFrame"
import LinkButton from "../LinkButton"
import { contact } from "../../../data/contact"

export default function MainTitle() {
	return (
		<SectionFrame id="title">
			<div className="relative z-10 inline-block w-full pb-20 text-center lg:pt-0">
				<h1 className="bg-gradient-to-br from-pink-300 to-blue-300 bg-clip-text text-5xl font-extrabold leading-normal tracking-wide text-transparent lg:text-9xl lg:leading-loose">
					Angel Zhang
				</h1>
				<h2 className="shadow-background pb-10 text-3xl text-blue-200 drop-shadow-2xl lg:text-6xl">
					{t("software-developer")}
				</h2>
				{/*<Badge text={`${t("available-to-work")}`} color="#66ff94" />s*/}

				<h3 className="text-balance pt-16 text-2xl lg:text-3xl">
					{/*{t("in-progress")}*/}

					<div className="flex flex-col justify-center gap-4 lg:flex-row">
						{contact.map((contact) => {
							return (
								<LinkButton
									link={contact.link}
									text={contact.name}
									icon={contact.image}
								/>
							)
						})}
					</div>
				</h3>
			</div>
		</SectionFrame>
	)
}
