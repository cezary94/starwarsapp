import { gameReducer } from './game.reducer';
import { GameActions } from './game.actions';
import { GameState, initialGameState } from './game.state';
import { testPerson, testStarship } from '../../test.fixtures';
import { Player } from '../../models/player';

describe('Game Reducer', () => {
  it('should set loading to true on loadAllPeople action', () => {
    const action = GameActions.loadAllPeople();
    const state = gameReducer(initialGameState, action);
    expect(state.loadingAllPeople).toBeTrue();
  });

  it('should update allPeople and set loading to false on loadAllPeopleSuccess action', () => {
    const allPeople = [testPerson];
    const action = GameActions.loadAllPeopleSuccess({ allPeople });
    const state = gameReducer(initialGameState, action);
    expect(state.allPeople).toEqual(allPeople);
    expect(state.loadingAllPeople).toBeFalse();
  });

  it('should update allStarships and set loading to false on loadAllStarshipsSuccess action', () => {
    const allStarships = [testStarship];
    const action = GameActions.loadAllStarshipsSuccess({ allStarships });
    const state = gameReducer(initialGameState, action);
    expect(state.allStarships).toEqual(allStarships);
    expect(state.loadingAllStarships).toBeFalse();
  });

  it('should set error on loadAllPeopleFailure', () => {
    const error = 'Failed to load people';
    const action = GameActions.loadAllPeopleFailure({ error });
    const state = gameReducer(initialGameState, action);
    expect(state.error).toEqual(error);
    expect(state.loadingAllStarships).toBeFalse();
  });

  it('should increment the score for a winner', () => {
    const currentState: GameState = {
      ...initialGameState, 
      score: {
        leftSide: 3,
        rightSide: 5,
      },
    };

    const action = GameActions.saveScore({ winner: Player.LEFT_SIDE });
    const newState = gameReducer(currentState, action);

    expect(newState.score.leftSide).toBe(4); 
    expect(newState.score.rightSide).toBe(5);
  });
});
