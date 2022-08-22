import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfeedbackComponent } from './tfeedback.component';

describe('TfeedbackComponent', () => {
  let component: TfeedbackComponent;
  let fixture: ComponentFixture<TfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
