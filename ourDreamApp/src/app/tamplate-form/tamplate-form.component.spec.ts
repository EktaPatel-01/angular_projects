import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamplateFormComponent } from './tamplate-form.component';

describe('TamplateFormComponent', () => {
  let component: TamplateFormComponent;
  let fixture: ComponentFixture<TamplateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamplateFormComponent]
    });
    fixture = TestBed.createComponent(TamplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
