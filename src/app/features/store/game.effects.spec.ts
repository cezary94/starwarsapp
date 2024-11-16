import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { loadAllPeople$, loadAllStarships$ } from './game.effects';
import { GameActions } from './game.actions';
import { SwapiService } from '../../services/api/swapi.service';
import { testPerson, testStarship } from '../../test.fixtures';

describe('GameEffects', () => {
    it('should dispatch loadAllPeopleSuccess on successful loadAllPeople', (done) => {
        const swapiServiceMock = {
          getAllPeople: () => of([testPerson]),
        } as Partial<SwapiService>;
        const actionsMock$ = of(GameActions.loadAllPeople());
      
        loadAllPeople$(actionsMock$, swapiServiceMock as SwapiService).subscribe((action: Action) => {
          expect(action).toEqual(
            GameActions.loadAllPeopleSuccess({ allPeople: [testPerson] })
          );
          done();
        });
    });

    it('should dispatch loadAllStarshipsSuccess on successful loadAllStarships', (done) => {
        const swapiServiceMock = {
            getAllStarships: () => of([testStarship]),
        } as Partial<SwapiService>;
        const actionsMock$ = of(GameActions.loadAllStarships());
      
        loadAllStarships$(actionsMock$, swapiServiceMock as SwapiService).subscribe((action: Action) => {
          expect(action).toEqual(
            GameActions.loadAllStarshipsSuccess({ allStarships: [testStarship] })
          );
          done();
        });
    });
});
