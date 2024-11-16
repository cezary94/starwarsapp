import { Person } from '../../models/people';
import { Starship } from '../../models/starship';
import { GameActions } from './game.actions';
import { testPerson, testStarship } from '../../test.fixtures';
import { Player } from '../../models/player';

describe('Game Actions', () => {
  it('should create loadAllPeople action', () => {
    const action = GameActions.loadAllPeople();
    expect(action.type).toEqual('[Game] Load All People');
  });

  it('should create loadAllPeopleSuccess action with payload', () => {
    const allPeople: Person[] = [testPerson];
    const action = GameActions.loadAllPeopleSuccess({ allPeople });
    expect(action.type).toEqual('[Game] Load All People Success');
    expect(action.allPeople).toEqual(allPeople);
  });

  it('should create loadAllStarshipsSuccess action with payload', () => {
    const allStarships: Starship[] = [testStarship];
    const action = GameActions.loadAllStarshipsSuccess({ allStarships });
    expect(action.type).toEqual('[Game] Load All Starships Success');
    expect(action.allStarships).toEqual(allStarships);
  });

  it('should create saveScore action with payload', () => {
    const winner: Player = Player.LEFT_SIDE;
    const action = GameActions.saveScore({ winner });
    expect(action.type).toEqual('[Game] Save score');
    expect(action.winner).toEqual(winner);
  });
});
