import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySketchComponent } from './modify-sketch.component';

describe('ModifySketchComponent', () => {
  let component: ModifySketchComponent;
  let fixture: ComponentFixture<ModifySketchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifySketchComponent]
    });
    fixture = TestBed.createComponent(ModifySketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
