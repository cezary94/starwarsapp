import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { GameFacade } from './features/store/game.facade';
import { HeaderComponent } from './components/header/header.component';
import { Resource } from './models/resource';
import { ResourcePickerComponent } from './components/resource-picker/resource-picker.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { GameComponent } from "./components/game/game.component";
import { GameResultComponent } from "./components/game-result/game-result.component";
import { Player } from './models/player';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    LoaderComponent,
    ResourcePickerComponent,
    GameComponent,
    GameResultComponent
],
  providers: [GameFacade],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  gameFacade = inject(GameFacade);
  cdr = inject(ChangeDetectorRef);

  selectedResource: Resource | null = null; 
  readonly resources = Resource;

  ngOnInit(): void {
    this.gameFacade.loadAllPeople();
    this.gameFacade.loadAllStarships();
  }

  onSelectResource(resource: Resource): void {
    this.selectedResource = resource;
  }

  newBattle(): void {
    this.selectedResource = null;
  }

  saveScore(winner: Player): void {
    this.gameFacade.saveScore(winner);
    this.cdr.detectChanges();
  }
}
