import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPostarComponent } from './post-postar.component';

describe('PostPostarComponent', () => {
  let component: PostPostarComponent;
  let fixture: ComponentFixture<PostPostarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPostarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPostarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
