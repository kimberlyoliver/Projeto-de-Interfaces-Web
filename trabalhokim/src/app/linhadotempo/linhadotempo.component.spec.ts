import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhadotempoComponent } from './linhadotempo.component';

describe('LinhadotempoComponent', () => {
  let component: LinhadotempoComponent;
  let fixture: ComponentFixture<LinhadotempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhadotempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhadotempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
