import { ItemModel } from "./models/item.interface";


// 7ngrx
export interface ItemsState{
    loading: boolean;
  items: ReadonlyArray<ItemModel>;
}