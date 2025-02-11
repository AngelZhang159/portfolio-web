import React from 'react'
import PropType from 'prop-types'

export default function LinkButton ({ text, icon, iconAlt, link, download }) {
  return (
    <a
      href={link}
      className='inline-flex px-5 py-2.5 text-2xl md:text-4xl items-center justify-center gap-4 rounded-full bg-green-600 font-bold text-white transition-colors duration-300 hover:bg-green-400'
      download={download}
    >
      {icon ? <img src={icon} alt={iconAlt} className='size-10' /> : <></>}
      {text}
    </a>
  )
}

LinkButton.propTypes = {
  text: PropType.string.isRequired,
  icon: PropType.string,
  alt: PropType.string,
  link: PropType.string.isRequired
}
