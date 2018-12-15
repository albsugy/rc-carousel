import { createStore, compose, combineReducers, applyMiddleware  } from 'redux'
import thunk from "redux-thunk"
import { carouselReducer } from '../reducers/index'

export var configure = () => {
  var reducer = combineReducers(
    {
      carousel: carouselReducer
    }
  )

  var store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
      )

  return store
}