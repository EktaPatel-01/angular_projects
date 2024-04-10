import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllNovelComponent } from './find-all-novel.component';

describe('FindAllNovelComponent', () => {
  let component: FindAllNovelComponent;
  let fixture: ComponentFixture<FindAllNovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindAllNovelComponent]
    });
    fixture = TestBed.createComponent(FindAllNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
