import { combineReducers } from 'redux';
import {Skills} from '../components/skills/reducer';
import {Profile} from '../components/profile/reducer';



//all reducers are imported here



export default combineReducers({
   AllSkills : Skills,
   UserProfile : Profile
})