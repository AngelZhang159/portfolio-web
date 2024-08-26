import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import BadgeGroup from "./BadgeGroup"
import LinkButton from "./LinkButton"
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { t } from "i18next"

export default function Card({ title, description, photos, badges, link }) {
	const [slidesPerView, setSlidesPerView] = useState(1)

	useEffect(() => {
		const updateSlidesPerView = () => {
			if (window.innerWidth >= 1024) {
				setSlidesPerView(3)
			} else if (window.innerWidth >= 768) {
				setSlidesPerView(2)
			} else {
				setSlidesPerView(1)
			}
		}

		// Initial check
		updateSlidesPerView()

		// Add event listener
		window.addEventListener("resize", updateSlidesPerView)

		// Clean up event listener
		return () => {
			window.removeEventListener("resize", updateSlidesPerView)
		}
	}, [])

	return (
		<div className="pt-3.5">
			<div className="relative rounded-3xl border">
				<div className="relative flex flex-col justify-between p-6 pt-8 lg:px-10">
					<p className="text-4xl font-bold leading-none">{title}</p>

					<div className="py-6">
						<Swiper
							navigation={true}
							slidesPerView={slidesPerView}
							spaceBetween={30}
							centeredSlides={false}
							modules={[Navigation]}
						>
							{photos ? (
								photos.map((photo) => {
									return (
										<SwiperSlide key={photo.alt}>
											<img src={photo.photo} alt={photo.alt} />
										</SwiperSlide>
									)
								})
							) : (
								<></>
							)}
						</Swiper>

						<p
							className={`break-words pt-4 ${photos == null ? "line-clamp-none lg:line-clamp-6" : "lg:line-clamp-3"}`}
						>
							{t(description)}
						</p>

						<BadgeGroup badges={badges} />

						<div className="flex w-full flex-row-reverse">
							<LinkButton text={t("go-to-github")} link={link} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	desc_tl: PropTypes.string.isRequired,
	photos: PropTypes.array,
	photo: PropTypes.string,
	badges: PropTypes.array.isRequired,
	link: PropTypes.string.isRequired,
}
