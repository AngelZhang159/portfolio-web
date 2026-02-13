import React from "react"
import SectionFrame from "../SectionFrame"
import SectionTitle from "../SectionTitle"
import TimelineItem from "./TimelineItem"
import { experiences } from "../../../data/experiences"
import { t } from "i18next"
import { Trans } from "react-i18next"

const renderContent = (contentItems) => {
	return contentItems.map((item, index) => {
		switch (item.type) {
			case "trans":
				return <Trans key={index} i18nKey={item.key} />
			case "title":
				return (
					<React.Fragment key={index}>
						<b>{t(item.key)}</b>
						<br />
						<br />
					</React.Fragment>
				)
			case "text":
				return (
					<React.Fragment key={index}>
						<p>{t(item.key)}</p>
						<br />
					</React.Fragment>
				)
			case "list":
				return (
					<React.Fragment key={index}>
						<ul className="list-disc pl-10">
							{item.items.map((itemKey, i) => (
								<li key={i}>{t(itemKey)}</li>
							))}
						</ul>
					</React.Fragment>
				)
			default:
				return null
		}
	})
}

export default function Experience() {
	return (
		<SectionFrame id={"experience"}>
			<SectionTitle fromColor={"from-green-300"} toColor={"to-yellow-200"}>
				{t("experience")}
			</SectionTitle>

			{experiences.map((experience, index) => (
				<TimelineItem
					key={experience.id}
					date={t(experience.dateKey)}
					logo={experience.logo}
					logoAlt={experience.logoAlt}
					title={t(experience.titleKey)}
					company={experience.company}
					badges={experience.badges}
					isFirst={index === 0}
					isLast={index === experiences.length - 1}
				>
					{renderContent(experience.content)}
				</TimelineItem>
			))}
		</SectionFrame>
	)
}
