import Badge from "./Badge";
import BadgeGroup from "./BadgeGroup";
import SectionFrame from "./SectionFrame";
import SectionTitle from "./SectionTitle";
import { badges } from "../../data/jobBadges";
import { t } from "i18next";

export default function Experience() {
	return (
		<SectionFrame id={"experience"}>

			<div className="text-xl max-w-prose">

				<SectionTitle fromColor={"from-green-300"} toColor={"to-yellow-200"}>
					{t('experience')}
				</SectionTitle>

				<p className="text-3xl"><b>{t('mobile-developer-internship')}</b></p>
				<br />
				<b>
					{t('the-company')}
				</b>
				<p>
					{t('company-def')}
				</p>
				<br />
				<b>
					{t('my-role')}
				</b>
				<p>
					{t('role-def')}
				</p>
				<br />
				<p>
					{t('role-additionally')}
				</p>

				<BadgeGroup badges={badges} />
			</div>

		</SectionFrame>
	)
}