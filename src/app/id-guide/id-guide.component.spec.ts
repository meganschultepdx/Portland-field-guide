import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdGuideComponent } from './id-guide.component';

describe('IdGuideComponent', () => {
  let component: IdGuideComponent;
  let fixture: ComponentFixture<IdGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
