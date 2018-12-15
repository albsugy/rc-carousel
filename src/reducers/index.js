import Actions from '../actions/actionTypes'

const defaultState = {
  photos: [],
  status: null
}
export const carouselReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.REQUEST_RESULT:
      return {
        photos: action.payload.photos,
        status: action.payload.status
      }
    default:
      return state
  }
}

