import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfeedbacksComponent } from './sfeedbacks.component';

describe('SfeedbacksComponent', () => {
  let component: SfeedbacksComponent;
  let fixture: ComponentFixture<SfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
