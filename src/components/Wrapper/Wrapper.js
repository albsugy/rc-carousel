import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = ({currentIndex, count, children}) => {
  return (
    <div className="col">
      <div className={`slides-slider active-slide-${currentIndex}`}>
        <div className="slides-slider-wrapper" style={{
          'transform': `translateX(-${currentIndex*(100 / count)}%)`
        }}>
          { children }
        </div>
      </div>
    </div>
  )
}

Wrapper.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  children: PropTypes.array
}

export default Wrapper;