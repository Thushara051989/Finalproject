import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmprofileComponent } from './admprofile.component';

describe('AdmprofileComponent', () => {
  let component: AdmprofileComponent;
  let fixture: ComponentFixture<AdmprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
