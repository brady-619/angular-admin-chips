import { userConfig } from '../../models/userconfig.model';
import { createReducer, on } from '@ngrx/store';
import { userConfigActions } from '../actions/userconfig.actions';

export interface StateUserConfig {
    users: userConfig[];
}

const initialState: StateUserConfig = {
    users: []
}


const _userConfigReducer = createReducer(initialState,
    on(userConfigActions.SetUserConfig, (state, { config }) => ({...state, users: [...state.users, config]})), 
    on(userConfigActions.DeleteUserConfig, (state,{user}) => { 
    return    ({...state,conections: state.users.filter(item => item.telefono !== user )})   
    }),
  
    
 on(userConfigActions.ObtainUserConfig,(state,{user}) =>     { 
    //  console.log(state.conections)
    console.log("val a buscar",user)
    console.log("este", ({...state,user}))  
    console.log("state con name es:",state.users.find(item => item.telefono == user))  
     return    ({...state,user})  

    

    }),


    // const reducer = items(state = initialState, action) {
    //     switch(action.type) {
    //         case 'UPDATED_ITEMS':
    //             return { ...state, items: [...action.payload] }
    //         default:
    //             return state
    //     }

 
        
);




export function userConfigReducer(state:any, action:any) {
    return _userConfigReducer(state, action);
}

