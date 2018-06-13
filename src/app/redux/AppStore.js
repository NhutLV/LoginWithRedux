import rootLoginReducer from './reducer/RootLoginReducer'
import {createStore} from 'redux'

const store = createStore(rootLoginReducer);

export default store;