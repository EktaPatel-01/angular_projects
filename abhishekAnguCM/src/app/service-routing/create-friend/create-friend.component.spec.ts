import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFriendComponent } from './create-friend.component';

describe('CreateFriendComponent', () => {
  let component: CreateFriendComponent;
  let fixture: ComponentFixture<CreateFriendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFriendComponent]
    });
    fixture = TestBed.createComponent(CreateFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
