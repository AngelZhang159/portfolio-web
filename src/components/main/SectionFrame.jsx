export default function SectionFrame({ children, id }) {
	return (
		<section id={id} className="block justify-center w-full pb-28">
			{children}
		</section>
	)
}