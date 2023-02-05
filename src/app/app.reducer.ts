import { userConfig } from '../app/models/userconfig.model';
import { ActionReducerMap } from "@ngrx/store";
import { StateUserConfig, userConfigReducer } from '../app/store/reducers/userconfig.reducers';

export interface AppState{
 
    userConfig: StateUserConfig
}

export const appReducers: ActionReducerMap<AppState>={

    userConfig: userConfigReducer
}