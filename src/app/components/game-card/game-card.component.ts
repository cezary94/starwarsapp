import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Person } from '../../models/people';
import { Starship } from '../../models/starship';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameCardComponent {
  @Input() card: Person | Starship | null = null;
  @Input() isWinner: boolean | null = null;
  
  
  get cardAttribute(): string {
    if (this.card) {
      return ("mass" in this.card) ? "Mass: " + this.card.mass : ("crew" in this.card) ? "Crew: " + this.card.crew : '';
    }

    return '';
  }
  
}
