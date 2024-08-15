import { PropTypes } from "prop-types";

export default function IconButtonLink({ link, image }) {
	return (
		<a className="bg-white scale-125 rounded-full" referrerPolicy="no-referrer" target="_blank" href={link}>
			<img src={image} className="scale-90" />
		</a>
	)
}