import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent, MatProgressSpinnerModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the loader container', () => {
    const loaderContainer = fixture.debugElement.query(By.css('.loader-container'));
    expect(loaderContainer).toBeTruthy();
  });

  it('should display the mat-spinner', () => {
    const spinner = fixture.debugElement.query(By.css('mat-spinner'));
    expect(spinner).toBeTruthy();
  });

  it('should display the correct loading text', () => {
    const loadingText = fixture.nativeElement.querySelector('.loader-container .loader-text');
    expect(loadingText.textContent).toContain('Game is loading...');
  });
});
