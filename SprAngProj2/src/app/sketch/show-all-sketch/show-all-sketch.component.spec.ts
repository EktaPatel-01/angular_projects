import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllSketchComponent } from './show-all-sketch.component';

describe('ShowAllSketchComponent', () => {
  let component: ShowAllSketchComponent;
  let fixture: ComponentFixture<ShowAllSketchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllSketchComponent]
    });
    fixture = TestBed.createComponent(ShowAllSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
