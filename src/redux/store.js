import { createStore } from "redux"
import reducer from './reducer';
import {bindActionCreators} from 'redux'

const store = createStore(reducer);

export default store;