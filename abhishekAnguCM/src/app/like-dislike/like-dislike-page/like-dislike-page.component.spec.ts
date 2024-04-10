import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikePageComponent } from './like-dislike-page.component';

describe('LikeDislikePageComponent', () => {
  let component: LikeDislikePageComponent;
  let fixture: ComponentFixture<LikeDislikePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeDislikePageComponent]
    });
    fixture = TestBed.createComponent(LikeDislikePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
