import React from 'react'
import PropTypes from 'prop-types'
import BadgeGroup from './BadgeGroup'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { t } from 'i18next';

export default function Card({ title, description, photos, badges, link }) {
	return (
		<div className="p-3.5">
			<div className="border rounded-3xl relative">
				<div className='px-10 pt-8 justify-between flex-col flex relative'>

					<p className='text-4xl font-bold leading-none'>
						{title}
					</p>

					<div className='py-6'>

						<Swiper
							navigation={true}
							slidesPerView={3}
							spaceBetween={30}
							centeredSlides={false}
							modules={[Navigation]}
						>
							{photos ? (
								photos.map(photo => {
									return <SwiperSlide key={photo.alt}><img src={photo.photo} alt={photo.alt} /></SwiperSlide>
								})
							) : <></>}
						</Swiper>

						<p className={`break-words pt-4 ${photos == null ? 'line-clamp-6' : 'line-clamp-3'}`}>
							{t(description)}
						</p>

						<BadgeGroup badges={badges} />

						<div className='flex w-full flex-row-reverse'>
							<a href={link} className='right-0 font-bold text-white bg-blue-800 rounded-full py-2 px-4 hover:bg-blue-500 transition-colors duration-300'>{t('go-to-github')}</a>

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
	link: PropTypes.string.isRequired
}