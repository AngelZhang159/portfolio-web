import React from "react";
import BadgeGroup from "../BadgeGroup";
import SectionFrame from "../SectionFrame";
import SectionTitle from "../SectionTitle";
import { badges } from "../../../data/jobBadges";
import { t } from "i18next";

export default function Experience() {
	return (
		<SectionFrame id={"experience"}>

			<SectionTitle fromColor={"from-green-300"} toColor={"to-yellow-200"}>
				{t('experience')}
			</SectionTitle>

			<div className="inline-flex">
				<div className="flex flex-col items-center pr-8 lg:pr-0 lg:pt-0 pt-16">
					<div className="bg-green-400 w-6 h-6 rounded-full"></div>
					<div className="w-1 h-4/5 bg-gradient-to-b from-green-200 to-transparent"></div>
				</div>

				<div className="lg:inline-flex">
					<div className="flex-row lg:flex-col flex items-center lg:px-10">
						<p>April - June 2024</p>
						<img src="/images/mundo-sms-logo.webp" alt="Mundo SMS logo" className="w-36 p-6 lg:pt-10" />
					</div>

					<div className="lg:text-xl max-w-prose">

						<p className="text-2xl lg:text-4xl"><b>{t('mobile-developer-internship')}</b></p>
						<p className="underline">Comunicaciones Electrónicas Mundo SMS</p>
						<br />
						<b>
							{t('the-company')}
						</b>
						<br />
						<br />
						<p>
							{t('company-def')}
						</p>
						<br />
						<b>
							{t('my-role')}
						</b>
						<br />
						<br />
						<ul className="list-disc pl-10">
							<li>{t('first-app')}</li>
							<li>{t('deployed-app')}</li>
							<li>{t('deployed-server')}</li>
						</ul>
						<br />

						<BadgeGroup badges={badges} />

					</div>
				</div>
			</div>
		</SectionFrame>
	)
}