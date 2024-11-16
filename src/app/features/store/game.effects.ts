import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SwapiService } from '../../services/api/swapi.service';
import { GameActions } from './game.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const loadAllPeople$ = createEffect(
    (actions$ = inject(Actions), swapiService = inject(SwapiService)) => {
        return actions$.pipe(
            ofType(GameActions.loadAllPeople),
            mergeMap(() =>
                swapiService.getAllPeople()
                .pipe(
                map((allPeople) => GameActions.loadAllPeopleSuccess({ allPeople })),
                catchError((error) => of(GameActions.loadAllPeopleFailure({ error })))
                )
            )
        )
    },
    { functional: true }
);
export const loadAllStarships$ = createEffect(
    (actions$ = inject(Actions), swapiService = inject(SwapiService)) => {
        return actions$.pipe(
            ofType(GameActions.loadAllStarships),
            mergeMap(() =>
                swapiService.getAllStarships()
                .pipe(
                map((allStarships) => GameActions.loadAllStarshipsSuccess({ allStarships })),
                catchError((error) => of(GameActions.loadAllStarshipsFailure({ error })))
                )
            )
        )
    },
    { functional: true }
);