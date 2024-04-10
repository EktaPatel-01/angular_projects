import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSketchComponent } from './show-sketch.component';

describe('ShowSketchComponent', () => {
  let component: ShowSketchComponent;
  let fixture: ComponentFixture<ShowSketchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSketchComponent]
    });
    fixture = TestBed.createComponent(ShowSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
