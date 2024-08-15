import { PropTypes } from "prop-types";

export default function IconButtonLink({ link, image }) {
	return (
		// <Link href={link} referrerPolicy="no-referrer" target="_blank">
		// 	<IconButton radius="full" className="bg-white hover:bg-slate-400">
		// 		<img src={image}></img>
		// 	</IconButton>
		// </Link>
		<></>
	)
}

IconButtonLink.propTypes = {
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};