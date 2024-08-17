export default function SectionFrame({ children, id }) {
	return (
		<section id={id} className="flex justify-center w-full h-screen">
			{children}
		</section>
	)
}