import { Trans } from "react-i18next"
import SectionFrame from "../SectionFrame"
import SectionTitle from "../SectionTitle"
import React from "react"
import { t } from "i18next"

export default function About() {
	return (
		<SectionFrame id={"about"}>
			<SectionTitle toColor={"from-blue-300"} fromColor={"to-green-600"}>
				{t("about")}
			</SectionTitle>

			<div className="items-center text-balance lg:flex">
				<div className="text-balance pb-20 text-lg leading-loose lg:pb-0 lg:pr-10 lg:text-2xl">
					<p>
						<Trans i18nKey="recent-graduate">
							I am a recent graduate with a degree in Multiplatform Application
							Development (<b>DAM</b>), and I have experience in various
							programming languages, including <b>Java</b>.
						</Trans>
					</p>
					<br />
					<p>{t("driven-by")}</p>
				</div>

				<div className="relative flex h-[400px] min-w-[250px] justify-center bg-zinc-800 lg:h-[500px] lg:min-w-[350px] lg:justify-end">
					<img
						src="/images/portrait.webp"
						className="absolute z-20 h-auto w-[400] px-4 pb-16 lg:w-full"
						alt="Portrait of Angel Zhang"
					/>
					<div className="absolute -bottom-16 z-30 h-1/3 w-full bg-zinc-500">
						<div className="p-6 text-sm lg:text-lg">
							<p className="pb-2 text-2xl font-bold text-white lg:text-4xl">
								{t("contact")}
							</p>
							<div className="flex items-center">
								<img src="/icons/gmail.svg" className="pr-4" alt="Email icon" />
								<p>angelzhang159@gmail.com</p>
							</div>
							<div className="flex items-center">
								<img
									src="/icons/phone.svg"
									className="pr-4"
									alt="Phone number icon"
								/>
								<p>+34 671315209</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionFrame>
	)
}
