import { combineReducers } from 'redux';
import {Skills} from '../components/skills/reducer';


//all reducers are imported here



export default combineReducers({
   AllSkills : Skills,
})