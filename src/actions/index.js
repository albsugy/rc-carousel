import Api from '../api/Api';
import Actions from './actionTypes'

export function loadPhotos() {
  return dispatch => {
    dispatch({
      type: Actions.REQUEST_PENDING
    });

    return Api.getPhotos().then( res => {
      dispatch({
        type: Actions.REQUEST_RESULT,
        payload: {
          photos: res.hits,
          status: 'DONE'
        }
      })
    })
  };
}

