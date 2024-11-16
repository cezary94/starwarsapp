import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcePickerComponent } from './resource-picker.component';
import { By } from '@angular/platform-browser';
import { Resource } from '../../models/resource';

describe('ResourcePickerComponent', () => {
  let component: ResourcePickerComponent;
  let fixture: ComponentFixture<ResourcePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render two buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
    expect(buttons[0].nativeElement.textContent.trim()).toContain('People');
    expect(buttons[1].nativeElement.textContent.trim()).toContain('Starships');
  });

  it('should render correct icons', () => {
    const icons = fixture.debugElement.queryAll(By.css('mat-icon'));
    expect(icons.length).toBe(2);
    expect(icons[0].nativeElement.textContent.trim()).toBe('people');
    expect(icons[1].nativeElement.textContent.trim()).toBe('rocket_launch');
  });

  it('should emit "people" when the People button is clicked', () => {
    spyOn(component.selectResource, 'emit');

    const peopleButton = fixture.debugElement.queryAll(By.css('button'))[0];
    peopleButton.nativeElement.click();

    expect(component.selectResource.emit).toHaveBeenCalledWith(Resource.PEOPLE);
  });

  it('should emit "starships" when the Starships button is clicked', () => {
    spyOn(component.selectResource, 'emit');

    const starshipsButton = fixture.debugElement.queryAll(By.css('button'))[1];
    starshipsButton.nativeElement.click();

    expect(component.selectResource.emit).toHaveBeenCalledWith(Resource.STARSHIPS);
  });
});