import { Trans } from "react-i18next";
import SectionFrame from "../SectionFrame";
import SectionTitle from "../SectionTitle";
import React from "react";
import { t } from "i18next";

export default function About() {
	return (
		<SectionFrame id={"about"}>
			<SectionTitle toColor={"from-blue-300"} fromColor={"to-green-600"}>
				{t('about')}
			</SectionTitle>

			<div className="text-balance lg:flex items-center">

				<div className="text-lg text-balance lg:text-2xl leading-loose lg:pr-10 pb-20 lg:pb-0">
					<p>
						<Trans i18nKey="recent-graduate">
							I am a recent graduate with a degree in Multiplatform Application Development (<b>DAM</b>), and I have experience in various programming languages, including <b>Java</b>.
						</Trans>
					</p>
					<br />
					<p>
						{t('driven-by')}
					</p>
				</div>

				<div className="flex justify-center lg:justify-end relative lg:min-w-[350px] lg:h-[500px] min-w-[250px] h-[400px] bg-zinc-800">
					<img src="/images/portrait.webp" className="absolute lg:w-[350px] lg:h-[500px] min-w-[250px] h-[400px] pb-16 px-4 z-20" alt="Portrait of Angel Zhang" />
					<div className="absolute bottom-0 w-full bg-zinc-500 z-30 h-1/3">
						<div className="p-6 text-sm lg:text-lg">
							<p className="font-bold text-2xl lg:text-4xl pb-2 text-white">{t("contact")}</p>
							<div className="flex items-center">
								<img src="/icons/gmail.svg" className="pr-4" alt="Email icon" />
								<p>angelzhang159@gmail.com</p>
							</div>
							<div className="flex items-center">
								<img src="/icons/phone.svg" className="pr-4" alt="Phone number icon" />
								<p>+34 671315209</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionFrame>
	)
}