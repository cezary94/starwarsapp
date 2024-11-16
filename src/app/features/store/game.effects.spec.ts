import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { GameActions } from './game.actions';
import { SwapiService } from '../../services/api/swapi.service';
import { cold, hot } from 'jasmine-marbles';
import { Person } from '../../models/people';
import { Starship } from '../../models/starship';
import { testPerson, testPerson2, testStarship } from '../../test.fixtures';

// describe('Game Effects', () => {
//   let actions$: Observable<any>;
//   let effects: GameEffects;
//   let swapiService: jasmine.SpyObj<SwapiService>;

//   beforeEach(() => {
//     const spy = jasmine.createSpyObj('SwapiService', ['getAllPeople', 'getAllStarships']);

//     TestBed.configureTestingModule({
//       providers: [
//         GameEffects,
//         provideMockActions(() => actions$),
//         { provide: SwapiService, useValue: spy },
//       ],
//     });

//     effects = TestBed.inject(GameEffects);
//     swapiService = TestBed.inject(SwapiService) as jasmine.SpyObj<SwapiService>;
//   });

//   it('should dispatch loadAllPeopleSuccess on successful loadAllPeople', () => {
//     const people: Person[] = [testPerson, testPerson2];
//     const action = GameActions.loadAllPeople();
//     const outcome = GameActions.loadAllPeopleSuccess({ allPeople: people });

//     actions$ = hot('-a', { a: action });
//     const response = cold('-b|', { b: people });
//     swapiService.getAllPeople.and.returnValue(response);

//     expect(effects.loadAllPeople$).toBeObservable(cold('--b', { b: outcome }));
//   });

//   it('should dispatch loadAllStarshipsSuccess on successful loadAllStarships', () => {
//     const starships: Starship[] = [testStarship];
//     const action = GameActions.loadAllStarships();
//     const outcome = GameActions.loadAllStarshipsSuccess({ allStarships: starships });

//     actions$ = hot('-a', { a: action });
//     const response = cold('-b|', { b: starships });
//     swapiService.getAllStarships.and.returnValue(response);

//     expect(effects.loadAllStarships$).toBeObservable(cold('--b', { b: outcome }));
//   });

//   it('should dispatch loadAllPeopleFailure on failed loadAllPeople', () => {
//     const error = 'Failed to load people';
//     const action = GameActions.loadAllPeople();
//     const outcome = GameActions.loadAllPeopleFailure({ error });

//     actions$ = hot('-a', { a: action });
//     const response = cold('-#|', {}, error);
//     swapiService.getAllPeople.and.returnValue(response);

//     expect(effects.loadAllPeople$).toBeObservable(cold('--b', { b: outcome }));
//   });
// });
