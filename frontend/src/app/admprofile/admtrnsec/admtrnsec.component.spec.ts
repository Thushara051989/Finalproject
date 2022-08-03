import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmtrnsecComponent } from './admtrnsec.component';

describe('AdmtrnsecComponent', () => {
  let component: AdmtrnsecComponent;
  let fixture: ComponentFixture<AdmtrnsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmtrnsecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmtrnsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
