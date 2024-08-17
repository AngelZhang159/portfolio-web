import { t } from "i18next";
import Badge from "./main/Badge";
import Experience from "./main/Experience";
import MainTitle from "./main/MainTitle";
import SectionFrame from "./main/SectionFrame";
import SectionTitle from "./main/SectionTitle";
import { Trans } from "react-i18next";

export default function Main() {
	return (
		<main className="block justify-center items-center text-white mx-auto w-2/3">
			<MainTitle />

			<SectionFrame id={"about"}>
				<div className="text-xl relative">
					<SectionTitle toColor={"from-blue-300"} fromColor={"to-green-600"}>
						{t('about')}
					</SectionTitle>

					<div className="flex items-center">

						<div className="text-2xl text-wrap leading-loose pr-10">
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

						<div className="flex justify-end relative min-w-[350px] h-[500px]">
							<div className="bg-zinc-800 z-10 relative">
								<img src="/images/portrait.webp" className="flex w-[350px] h-[500px] pb-16 px-4 z-20" />
								<div className="bg-zinc-500 z-30 h-1/3 absolute bottom-0 w-full block">
									<div className="p-6">
										<p className="font-bold text-4xl pb-2 flex text-white">{t("contact")}</p>
										<div className="inline-flex">
											<img src="/icons/gmail.svg" className="pr-4" />
											<p className="text-lg">angelzhang159@gmail.com</p>
										</div>
										<div className="inline-flex">
											<img src="/icons/phone.svg" className="pr-4" alt="" />
											<p>+671315209</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</SectionFrame>

			<Experience />

			<section id="Projects">

			</section>
		</main>
	)
}
