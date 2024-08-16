import { t } from "i18next";

export default function MainTitle() {
	return (
		<section className="inline-block justify-center items-center py-44 relative z-10 w-full h-screen text-center" >
			<p className=" font-extrabold text-9xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-300 leading-normal">
				Angel Zhang
			</p>
			<p className="text-6xl text-blue-200 drop-shadow-2xl shadow-background">
				{t('software-developer')}
			</p>
			<p className="text-3xl pt-16">{t('in-progress')}</p>
		</section >
	)
}

