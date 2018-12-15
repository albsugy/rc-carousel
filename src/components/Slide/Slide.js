import React from 'react'
import PropTypes from 'prop-types'

const Slide = ({slides, slide}) => {
  const {largeImageURL, id, tags} = slide;
  const index = slides.indexOf(slide)
  return (
    <div id={`slide-${index}`} className="slide">
      <img src={largeImageURL} alt={id} />
      <p className="tags">{tags}</p>
      <span className="index">{index+1}</span>
    </div>
  )
}

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
  slides: PropTypes.array.isRequired,
}

export default Slide;