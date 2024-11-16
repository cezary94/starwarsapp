import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { Player } from './models/player';
import { Resource } from './models/resource';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ResourcePickerComponent } from './components/resource-picker/resource-picker.component';
import { GameComponent } from './components/game/game.component';
import { GameResultComponent } from './components/game-result/game-result.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let onLoadAllPeopleSpy: jasmine.Spy<() => void>;
    let onLoadAllStarshipsSpy: jasmine.Spy<() => void>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [
            AppComponent,
            HeaderComponent,
            LoaderComponent,
            ResourcePickerComponent,
            GameComponent,
            GameResultComponent,
        ],
        providers: [
            provideMockStore({ initialState: {} }),
        ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        onLoadAllPeopleSpy = spyOn(component.gameFacade, 'loadAllPeople');
        onLoadAllStarshipsSpy = spyOn(component.gameFacade, 'loadAllStarships');
        fixture.detectChanges();
    });

    it('should create the app component', () => {
        expect(component).toBeTruthy();
    });

    it('should call loadAllPeople and loadAllStarships on init', () => {

        expect(onLoadAllPeopleSpy).toHaveBeenCalled();
        expect(onLoadAllStarshipsSpy).toHaveBeenCalled();
    });

    it('should set selectedResource on onSelectResource call', () => {
        component.onSelectResource(Resource.PEOPLE);
        expect(component.selectedResource).toBe(Resource.PEOPLE);
    });

    it('should reset selectedResource on newBattle call', () => {
        component.selectedResource = Resource.STARSHIPS;
        component.newBattle();
        expect(component.selectedResource).toBeNull();
    });

    it('should call saveScore on saveScore call', () => {
        const onSaveScoreSpy = spyOn(component.gameFacade, 'saveScore');
        component.saveScore(Player.LEFT_SIDE);
        expect(onSaveScoreSpy).toHaveBeenCalledWith(Player.LEFT_SIDE);
    });

    it('should show the loader when loadingAllPeople$ or loadingAllStarships$ are true', () => {
        component.gameFacade.loadingAllPeople$ = of(true);
        component.gameFacade.loadingAllStarships$ = of(true);
        fixture.detectChanges();
        const loader = fixture.nativeElement.querySelector('app-loader');
        expect(loader).toBeTruthy();
    });

    it('should hide the loader when loadingAllPeople$ and loadingAllStarships$ are false', () => {
        component.gameFacade.loadingAllPeople$ = of(false);
        component.gameFacade.loadingAllStarships$ = of(false);
        fixture.detectChanges();

        const loader = fixture.nativeElement.querySelector('app-loader');
        expect(loader).toBeFalsy();
    });

    it('should render ResourcePicker when no selectedResource is set', () => {
        component.selectedResource = null;
        fixture.detectChanges();

        const resourcePicker = fixture.nativeElement.querySelector('app-resource-picker');
        expect(resourcePicker).toBeTruthy();
    });

    it('should render Game when selectedResource is PEOPLE', () => {
        component.selectedResource = Resource.PEOPLE;
        fixture.detectChanges();

        const game = fixture.nativeElement.querySelector('app-game');
        expect(game).toBeTruthy();
    });

    it('should render GameResult with the correct score', () => {
        fixture.detectChanges();

        const gameResult = fixture.nativeElement.querySelector('app-game-result');
        expect(gameResult).toBeTruthy();
    });
});
  
  