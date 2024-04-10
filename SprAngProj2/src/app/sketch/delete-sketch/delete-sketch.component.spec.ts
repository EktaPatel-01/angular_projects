import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSketchComponent } from './delete-sketch.component';

describe('DeleteSketchComponent', () => {
  let component: DeleteSketchComponent;
  let fixture: ComponentFixture<DeleteSketchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSketchComponent]
    });
    fixture = TestBed.createComponent(DeleteSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
