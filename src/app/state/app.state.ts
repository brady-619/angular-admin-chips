// 6ngrx

import { ActionReducerMap } from "@ngrx/store";
import { ItemsState } from "../core/items.state";
import { itemsReducer } from "./reducers/items.reducer";

export interface AppState{
    // son las tablas favotitos, etc
    items:  ItemsState;
    // shopping: 
}



export const ROOT_REDUCERS:ActionReducerMap<AppState> ={
    items: itemsReducer
}