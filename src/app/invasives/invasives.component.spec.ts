import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvasivesComponent } from './invasives.component';

describe('InvasivesComponent', () => {
  let component: InvasivesComponent;
  let fixture: ComponentFixture<InvasivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvasivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvasivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
