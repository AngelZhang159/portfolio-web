export default function HeaderTitle({ domain }) {
	return (
		<div className='items-center font-bold'>
			<a href='#home'>
				<span className='text-blue-100'>
					{domain}
				</span>
			</a>
		</div>
	)
}
