import { createAction, props } from '@ngrx/store';
import { Person } from '../../models/people';
import { Starship } from '../../models/starship';
import { Player } from '../../models/player';

export namespace GameActions {
  export const loadAllPeople = createAction('[Game] Load All People');
  export const loadAllPeopleSuccess = createAction(
    '[Game] Load All People Success',
    props<{ allPeople: Person[] }>()
  );
  export const loadAllPeopleFailure = createAction(
    '[Game] Load All People Failure',
    props<{ error: string }>()
  );
  
  export const loadAllStarships = createAction('[Game] Load All Starships');
  export const loadAllStarshipsSuccess = createAction(
    '[Game] Load All Starships Success',
    props<{ allStarships: Starship[] }>()
  );
  export const loadAllStarshipsFailure = createAction(
    '[Game] Load All Starships Failure',
    props<{ error: string }>()
  );
  export const saveScore = createAction(
    '[Game] Save score',
    props<{ winner: Player }>()
  );
}
