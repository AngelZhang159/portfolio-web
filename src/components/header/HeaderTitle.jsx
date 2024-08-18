import React from "react";
export default function HeaderTitle({ domain }) {
	return (
		<a href='#home' className='items-center font-bold'>
			<span className='text-blue-100'>
				{domain}
			</span>
		</a>
	)
}
