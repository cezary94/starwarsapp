import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/people';
import { Starship } from '../../models/starship';
import { Resource } from '../../models/resource';
import { MatButtonModule } from '@angular/material/button';
import { getRandomNumber, peopleBattle, starshipsBattle } from '../../helpers/game.helper';
import { GameCardComponent } from "../game-card/game-card.component";
import { Player } from '../../models/player';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [MatButtonModule, GameCardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  @Input() selectedResource: Resource | null = null;
  @Input() set resourceList(rl: Person[] | Starship[] | null) {
    if (rl) {
      this._resourceList = rl;
      this.startBattle();
    }
  }
  @Output() onNewBattle = new EventEmitter<void>();
  @Output() saveWinner = new EventEmitter<Player>();

  leftCard: Person | Starship | null = null;
  rightCard: Person | Starship | null = null;
  winner: Player | null = null;
  _resourceList: Person[] | Starship[] | null = null;
  readonly player = Player;


  get resourceList(): Person[] | Starship[] | null {
    return this._resourceList;
  }

  startBattle(): void {
    this.leftCard = this.resourceList![getRandomNumber(this.resourceList!.length)];
    this.rightCard = this.resourceList![getRandomNumber(this.resourceList!.length)];

    if (this.selectedResource === Resource.PEOPLE) {
      this.winner = peopleBattle(this.leftCard as Person, this.rightCard as Person);
    } else {
      this.winner = starshipsBattle(this.leftCard as Starship, this.rightCard as Starship);
    }
    if (this.winner) {
      this.saveWinner.emit(this.winner);
    }
  }

  newBattle(): void {
    this.winner = null;
    this.onNewBattle.emit();
  }
}
