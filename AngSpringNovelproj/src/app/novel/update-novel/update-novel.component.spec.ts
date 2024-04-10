import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNovelComponent } from './update-novel.component';

describe('UpdateNovelComponent', () => {
  let component: UpdateNovelComponent;
  let fixture: ComponentFixture<UpdateNovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNovelComponent]
    });
    fixture = TestBed.createComponent(UpdateNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
