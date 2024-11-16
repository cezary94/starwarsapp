import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Score } from '../../models/player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-result.component.html',
  styleUrl: './game-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameResultComponent {
  @Input() score: Score | null = null;
}
