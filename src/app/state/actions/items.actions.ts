/* 2ngrx*/

import { createAction, props } from "@ngrx/store";
import { ItemModel } from "src/app/core/models/item.interface";

export const loadItems = createAction(
    '[User List] Load users' //Requiere type
);

export const loadedItems = createAction(
  
    '[User List] Loaded succes', //Requiere type,
    props<{items: ItemModel[]}>() //pasa props

    
);
