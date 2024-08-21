import React from "react";
import { t } from "i18next";
import Badge from "../Badge";
import SectionFrame from "../SectionFrame";

export default function MainTitle() {
	return (
		<SectionFrame id="title">
			<div className="inline-block pb-20 relative z-10 w-full text-center pt-16 lg:pt-0" >
				<h1 className=" font-extrabold text-5xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-br to-blue-300 from-pink-300 leading-normal tracking-wide">
					Angel Zhang
				</h1>
				<h2 className="text-3xl lg:text-6xl text-blue-200 drop-shadow-2xl shadow-background pb-10">
					{t('software-developer')}
				</h2>
				<Badge text={`${t('available-to-work')}`} color="#66ff94" />

				<h3 className="text-2xl text-balance lg:text-3xl pt-16">{t('in-progress')}</h3>
			</div >
		</SectionFrame>
	)
}

