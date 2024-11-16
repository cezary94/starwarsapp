import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { By } from '@angular/platform-browser';
import { testPerson, testStarship } from '../../test.fixtures';
import { ChangeDetectionStrategy } from '@angular/core';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameCardComponent]
    })
    .overrideComponent(GameCardComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card name and mass when the card is a Person', () => {
    component.card = testPerson;
    fixture.detectChanges();

    const cardHeader = fixture.debugElement.query(By.css('mat-card-header')).nativeElement;
    const cardContent = fixture.debugElement.query(By.css('mat-card-content')).nativeElement;

    expect(cardHeader.textContent).toContain('Luke Skywalker');
    expect(cardContent.textContent).toContain('Mass: 77');
  });

  it('should render card name and crew when the card is a Starship', () => {
    component.card = testStarship;
    fixture.detectChanges();

    const cardHeader = fixture.debugElement.query(By.css('mat-card-header')).nativeElement;
    const cardContent = fixture.debugElement.query(By.css('mat-card-content')).nativeElement;

    expect(cardHeader.textContent).toContain('Death Star');
    expect(cardContent.textContent).toContain('Crew: 342953');
  });

  it('should apply "is-winner" class when isWinner is true', () => {
    component.card = testPerson;
    component.isWinner = true;
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('mat-card')).nativeElement;
    expect(cardElement.classList).toContain('is-winner');
  });

  it('should not apply "is-winner" class when isWinner is false', () => {
    component.card = testPerson;
    component.isWinner = false;
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('mat-card')).nativeElement;
    expect(cardElement.classList).not.toContain('is-winner');
  });

  it('should handle null card', () => {
    component.card = null;
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(By.css('mat-card'));
    expect(cardElement).toBeNull();
  });
});
