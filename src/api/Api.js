import request from '../utils/request'
import constants from '../constants/constants'

const Pixabay = {}

Pixabay.getPhotos = () => {
  const count = 6
  const key =  constants.api.key

  return request({
    url: `?key=${key}&q=beautiful+landscape&image_type=photo&per_page=${count}`,
    method: 'GET'
  })
}

export default Pixabay