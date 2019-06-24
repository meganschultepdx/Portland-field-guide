import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantOfDayComponent } from './plant-of-day.component';

describe('PlantOfDayComponent', () => {
  let component: PlantOfDayComponent;
  let fixture: ComponentFixture<PlantOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
