import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.state';
import { gameFeatureKey } from './game.reducer';

export const selectGameState = createFeatureSelector<GameState>(gameFeatureKey);

export const selectAllPeople = createSelector(
  selectGameState,
  (state) => state.allPeople
);

export const selectAllStarships = createSelector(
  selectGameState,
  (state) => state.allStarships
);

export const selectScore = createSelector(
  selectGameState,
  (state) => state.score
);

export const selectGameLoadingAllPeople = createSelector(
  selectGameState,
  (state) => state.loadingAllPeople
);

export const selectGameLoadingAllStarships = createSelector(
  selectGameState,
  (state) => state.loadingAllStarships
);