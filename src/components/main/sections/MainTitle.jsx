import React from "react";
import { t } from "i18next";
import Badge from "../Badge";
import SectionFrame from "../SectionFrame";

export default function MainTitle() {
	return (
		<SectionFrame>
			<div className="inline-block pb-20 relative z-10 w-full text-center" >
				<p className=" font-extrabold text-9xl text-transparent bg-clip-text bg-gradient-to-br to-blue-300 from-pink-300 leading-normal tracking-wide">
					Angel Zhang
				</p>
				<p className="text-6xl text-blue-200 drop-shadow-2xl shadow-background pb-10">
					{t('software-developer')}
				</p>
				<Badge text={`${t('available-to-work')}`} color="#66ff94" />
				<p className="text-3xl pt-16">{t('in-progress')}</p>
			</div >
		</SectionFrame>
	)
}

