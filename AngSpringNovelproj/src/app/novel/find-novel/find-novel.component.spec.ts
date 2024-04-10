import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNovelComponent } from './find-novel.component';

describe('FindNovelComponent', () => {
  let component: FindNovelComponent;
  let fixture: ComponentFixture<FindNovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindNovelComponent]
    });
    fixture = TestBed.createComponent(FindNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
