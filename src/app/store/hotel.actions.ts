import { createAction, props } from "@ngrx/store";
import { Hotel } from "../models/hotel";


export const enum HotelTypes {
  ORDER_FOOD = '[Order Page] ORDER FOOD',
  LOAD_HOTELS = '[Hotel List] Load Hotels',
  LOAD_HOTELS_SUCCESS = '[Hotel List] Load Hotels Success',
  LOAD_HOTELS_ERROR = '[Hotel List] Load Hotels Error'
}


export const loadHotels = createAction(HotelTypes.LOAD_HOTELS);
export const loadHotelsSuccess = createAction(HotelTypes.LOAD_HOTELS_SUCCESS, props<{hotels: Hotel[]}>());
export const loadHotelsError = createAction(HotelTypes.LOAD_HOTELS_ERROR);



