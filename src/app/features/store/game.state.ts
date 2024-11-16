import { Person } from '../../models/people';
import { Score } from '../../models/player';
import { Starship } from '../../models/starship';

export interface GameState {
  allPeople: Person[];
  allStarships: Starship[];
  score: Score;
  loadingAllPeople: boolean;
  loadingAllStarships: boolean;
  error: string | null;
}

export const initialGameState: GameState = {
  allPeople: [],
  allStarships: [],
  score: {
    leftSide: 0,
    rightSide: 0
  },
  loadingAllPeople: false,
  loadingAllStarships: false,
  error: null,
};