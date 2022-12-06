import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

export default function configureStore() {
  return createStore(reducer, composeWithDevTools())
}
