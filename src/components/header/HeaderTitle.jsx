import PropTypes from 'prop-types';
import React from "react";

export default function HeaderTitle({ domain }) {
	return (
		<a href='#home' className='items-center font-semibold'>
			<span className='text-blue-100'>
				{domain}
			</span>
		</a>
	)
}

HeaderTitle.propTypes = {
	domain: PropTypes.string.isRequired
}