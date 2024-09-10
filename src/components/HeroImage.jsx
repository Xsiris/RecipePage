import React from 'react'
import omeletteImage from '../img/image-omelette.jpeg'

const HeroImage = () => {
  return (
    <section>
        <img className="md:rounded-2xl" src={omeletteImage} alt="omelette"/>
    </section>
  )
}

export default HeroImage
