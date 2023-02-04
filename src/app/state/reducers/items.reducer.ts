// 4ngrx
import { createReducer, on } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/item.interface';
import { loadedItems, loadItems } from '../actions/items.actions';
import { ItemsState } from 'src/app/core/items.state';

// estado inicial
export const initialState: ItemsState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => { //llamar api 
    return {...state, loading:true}
  }),
  on(loadedItems, (state, {items}) => { //llamar api 
    return {...state, loading:false, items}
  })
);
