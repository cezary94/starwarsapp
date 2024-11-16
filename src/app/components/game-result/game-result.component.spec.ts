import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultComponent } from './game-result.component';
import { Score } from '../../models/player';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('GameResultComponent', () => {
  let component: GameResultComponent;
  let fixture: ComponentFixture<GameResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameResultComponent]
    })
    .overrideComponent(GameResultComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render score items correctly', async () => {
    const mockScore: Score = {
      leftSide: 3,
      rightSide: 5,
    };

    component.score = mockScore;
    fixture.detectChanges();

    const scoreItems = fixture.debugElement.queryAll(By.css('.score-item'));
    expect(scoreItems.length).toBe(2);

    expect(scoreItems[0].nativeElement.textContent).toContain('leftSide: 3');
    expect(scoreItems[1].nativeElement.textContent).toContain('rightSide: 5');
  });
});
