import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { HotelActions } from './hotel-action-types';
import { Hotel } from '../models/hotel';

export interface HotelState {
  hotel: Hotel;
}

export const initialState: HotelState = {
  hotel: undefined
}



export const hotelReducer = createReducer(
  initialState,
  on(HotelActions.loadHotelsSuccess,  (state, { hotels }) => ( {...state, hotelList: hotels}))
  );

