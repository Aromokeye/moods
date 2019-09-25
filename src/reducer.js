import {CHANGE_SEARCHFIELD} from './constantsForRedux'

const initialState={
    //the point of actions
    searchField:''
}

//then the reducer itself which specifies the change to take place.
export const searchPeople =(state=initialState, action={})=>{
    switch(action.type){
    case CHANGE_SEARCHFIELD: 
        return Object.assign({}, state, {searchField: action.payload});
    default: 
        return state;
    }
}
