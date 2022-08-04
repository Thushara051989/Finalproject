import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmstdsecComponent } from './admstdsec.component';

describe('AdmstdsecComponent', () => {
  let component: AdmstdsecComponent;
  let fixture: ComponentFixture<AdmstdsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmstdsecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmstdsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
