import SectionFrame from "../SectionFrame";
import React from 'react'
import SectionTitle from "../SectionTitle";
import Card from "../Card";
import { projects } from '../../../data/projects'

export default function Projects() {
	return (
		<SectionFrame id="projects">

			<SectionTitle fromColor="from-yellow-200" toColor="to-orange-500">
				Projects
			</SectionTitle>
			<div className="w-full grid justify-between lg:grid-cols-2 sm:grid-cols-1 items-center">
				{projects.map(project => {
					return (
						<Card key={project.title} title={project.title} description={project.description} photos={project.photos} badges={project.badges} link={project.link} />
					)
				})}
			</div>

		</SectionFrame>
	)
}