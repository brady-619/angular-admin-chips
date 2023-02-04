// 8ngrx
import { createSelector } from "@ngrx/store"; 
import { ItemsState } from "src/app/core/items.state";
import { AppState } from "../app.state";

export const selectitemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
    selectitemsFeature,
    (state: ItemsState) => state.items

);
export const selectLoading = createSelector(
    selectitemsFeature,
    (state: ItemsState) => state.loading

);