import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Slide from '../components/Slide/Slide'
import Arrow from '../components/Arrow/Arrow'
import Wrapper from '../components/Wrapper/Wrapper'

import { loadPhotos } from '../actions/index'

class Carousel extends Component {
  constructor(){
    super()
    this.state = {
      currentSlide: {}
    }
  }
  componentDidMount(){
    this.props.loadPhotos().then( () =>{
      this.setState({
        currentSlide: this.props.photos[0]
      })
    })
  }
  nextSlide = () => {
    const { currentSlide } = this.state
    const { photos } = this.props
    const newIndex = photos.indexOf(currentSlide) + 1;
    this.setState({
      currentSlide: photos[newIndex]
    })
  }
  prevSlide = () => {
    const { currentSlide } = this.state
    const { photos } = this.props
    const newIndex = photos.indexOf(currentSlide) - 1;

    this.setState({
      currentSlide: photos[newIndex]
    })
  }

  render() {
    const { currentSlide } = this.state
    const { photos, status } = this.props
    const currentIndex = photos.indexOf(currentSlide)

    const SlidesList = photos.map(slide => <Slide key={slide.id} slides={photos} slide={slide} />)
    return (
      <div>
        { status === 'DONE' & photos.length > 0 
          ? 
          <Wrapper currentIndex={currentIndex} count={photos.length}>
            { SlidesList }
          </Wrapper>
          : <div className="col">Loading...</div>
        }

        <Arrow
          handleOnClick={this.prevSlide}
          disabled={currentIndex === 0}
          text={'Prev'}
        />

        <Arrow
          handleOnClick={this.nextSlide}
          disabled={currentIndex === photos.length-1}
          text={'Next'}
        />
        
      </div>
    )
  }
}

Carousel.propTypes = {
  photos: PropTypes.array.isRequired,
  loadPhotos: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({ 
  photos: state.carousel.photos,
  status: state.carousel.status
  })

const mapDispatchToProps = dispatch => {
  return {
    loadPhotos: () => dispatch(loadPhotos()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
