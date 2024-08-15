export default function HeaderTitle({ domain }) {
	return (
		<div className='items-center font-bold'>
			<a href='#home'>
				<span className='text-primary'>
					{domain}
				</span>
			</a>
		</div>
	)
}
