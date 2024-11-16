import { createReducer, on } from '@ngrx/store';
import { GameActions } from './game.actions';
import { initialGameState } from './game.state';

export const gameFeatureKey = 'game';

export const gameReducer = createReducer(
  initialGameState,
  on(GameActions.loadAllPeople, (state) => ({ ...state, loadingAllPeople: true })),
  on(GameActions.loadAllPeopleSuccess, (state, { allPeople }) => ({
    ...state,
    allPeople,
    loadingAllPeople: false,
  })),
  on(GameActions.loadAllPeopleFailure, (state, { error }) => ({
    ...state,
    error,
    loadingAllPeople: false,
  })),
  on(GameActions.loadAllStarships, (state) => ({ ...state, loadingAllStarships: true })),
  on(GameActions.loadAllStarshipsSuccess, (state, { allStarships }) => ({
    ...state,
    allStarships,
    loadingAllStarships: false,
  })),
  on(GameActions.loadAllStarshipsFailure, (state, { error }) => ({
    ...state,
    error,
    loadingAllStarships: false,
  })),
  on(GameActions.saveScore, (state, { winner }) => ({
    ...state,
    score: {
      ...state.score,
      [winner]: state.score[winner] + 1
    }
  }))
);
