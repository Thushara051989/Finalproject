import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmcrssecComponent } from './admcrssec.component';

describe('AdmcrssecComponent', () => {
  let component: AdmcrssecComponent;
  let fixture: ComponentFixture<AdmcrssecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmcrssecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmcrssecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
