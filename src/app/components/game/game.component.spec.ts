import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import { GameCardComponent } from '../game-card/game-card.component';
import { Resource } from '../../models/resource';
import { Person } from '../../models/people';
import { Player } from '../../models/player';
import { By } from '@angular/platform-browser';
import { testPerson, testPerson2 } from '../../test.fixtures';

const mockPeople: Person[] = [testPerson, testPerson2];

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComponent, GameCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
  });

  describe('Component', () => {
    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should emit saveWinner when a winner is determined', () => {
      const saveWinnerSpy = spyOn(component.saveWinner, 'emit');
      component.resourceList = mockPeople;
      component.selectedResource = Resource.PEOPLE;

      component.startBattle();

      if (component.winner) {
        expect(saveWinnerSpy).toHaveBeenCalledWith(component.winner);
      } else {
        expect(saveWinnerSpy).not.toHaveBeenCalled();
      }
    });

    it('should select two random cards from the resourceList', () => {
      component.resourceList = mockPeople;
      component.selectedResource = Resource.PEOPLE;

      component.startBattle();

      expect(mockPeople).toContain(component.leftCard as Person);
      expect(mockPeople).toContain(component.rightCard as Person);
    });

    it('should reset the winner and emit onNewBattle event', () => {
      const onNewBattleSpy = spyOn(component.onNewBattle, 'emit');
      component.winner = Player.LEFT_SIDE;

      component.newBattle();

      expect(component.winner).toBeNull();
      expect(onNewBattleSpy).toHaveBeenCalled();
    });
  });

  describe('Template', () => {
    it('should display the winner when a winner is determined', () => {
      component.leftCard = mockPeople[0];
      component.rightCard = mockPeople[1];
      component.winner = Player.LEFT_SIDE;

      fixture.detectChanges();

      const resultElement = fixture.debugElement.query(By.css('.result')).nativeElement;
      expect(resultElement.textContent).toContain(`The winner is: ${mockPeople[0].name}`);
    });

    it('should display "No winner this time!" when there is no winner', () => {
      component.winner = null;

      fixture.detectChanges();

      const resultElement = fixture.debugElement.query(By.css('.result')).nativeElement;
      expect(resultElement.textContent).toContain('No winner this time!');
    });

    it('should render game cards for leftCard and rightCard', () => {
      component.leftCard = mockPeople[0];
      component.rightCard = mockPeople[1];

      fixture.detectChanges();

      const gameCards = fixture.debugElement.queryAll(By.css('app-game-card'));
      expect(gameCards.length).toBe(2);
      expect(gameCards[0].componentInstance.card).toBe(mockPeople[0]);
      expect(gameCards[1].componentInstance.card).toBe(mockPeople[1]);
    });

    it('should call newBattle method when "New game" button is clicked', () => {
      spyOn(component, 'newBattle');

      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      button.click();

      expect(component.newBattle).toHaveBeenCalled();
    });
  });
});
