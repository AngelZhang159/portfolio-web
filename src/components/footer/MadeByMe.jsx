import IconButtonLink from "./IconButtonLink";
import { contact } from '../../data/contact'
import { t } from "i18next";

export default function MadeByMe() {
	return (
		<div className="flex flex-col items-center self-center justify-center">
			<p className="text-center pb-4">
				{t('website-made-by-me')}
			</p>

			<div className="inline-flex gap-8 justify-center">
				{contact.map(link => {
					return <IconButtonLink link={link.link} image={link.image} />
				})}
			</div>
		</div>
	)
}