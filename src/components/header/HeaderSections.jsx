import SectionButton from "./SectionButton";
import { sections } from "../../data/headerSections"
import { t } from "i18next";

export default function HeaderSections() {

	return (
		<div className='gap-10 flex text-gray-300 absolute left-1/2 transform -translate-x-1/2'>

			{sections.map(section => {
				return <SectionButton key={section} text={t(section)} section={section} />
			})}
		</div>
	)
}