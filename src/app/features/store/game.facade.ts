import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAllPeople, selectAllStarships, selectGameLoadingAllPeople, selectGameLoadingAllStarships, selectScore } from "./game.selector";
import { GameState } from "./game.state";
import { Observable } from "rxjs";
import { Person } from "../../models/people";
import { Starship } from "../../models/starship";
import { GameActions } from "./game.actions";
import { Player, Score } from "../../models/player";

@Injectable()
export class GameFacade {
    allPeople$: Observable<Person[]>;
    allStarships$: Observable<Starship[]>;
    score$: Observable<Score>;
    loadingAllPeople$: Observable<boolean>;
    loadingAllStarships$: Observable<boolean>;

    constructor(private store: Store<GameState>) {
        this.allPeople$ = this.store.select(selectAllPeople);
        this.allStarships$ = this.store.select(selectAllStarships);
        this.score$ = this.store.select(selectScore);
        this.loadingAllPeople$ = this.store.select(selectGameLoadingAllPeople);
        this.loadingAllStarships$ = this.store.select(selectGameLoadingAllStarships);
    }

    loadAllPeople(): void {
        this.store.dispatch(GameActions.loadAllPeople());
    }

    loadAllStarships(): void {
        this.store.dispatch(GameActions.loadAllStarships());
    }

    saveScore(winner: Player): void {
        this.store.dispatch(GameActions.saveScore({ winner }));
    }
}