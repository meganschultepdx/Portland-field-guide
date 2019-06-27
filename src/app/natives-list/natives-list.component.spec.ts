import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativesListComponent } from './natives-list.component';

describe('NativesListComponent', () => {
  let component: NativesListComponent;
  let fixture: ComponentFixture<NativesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
