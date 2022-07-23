import { Injectable } from "@angular/core";
import { DataService } from "../services/data.service";
import { Actions, createEffect, ofType} from '@ngrx/effects';
import {concatMap, map} from 'rxjs/operators';
import { HotelActions } from "./hotel-action-types";
import { loadHotelsSuccess } from "./hotel.actions";

@Injectable()
export class HotelsEffects {

    loadHotels$ = createEffect(
      () => this.actions$
          .pipe(
              ofType(HotelActions.loadHotels),
              concatMap(action =>
                  this.dataService.getList()),
              map(hotels => loadHotelsSuccess({hotels}))
          )
  );

  constructor(private actions$: Actions,
    private dataService: DataService) {

}
}
