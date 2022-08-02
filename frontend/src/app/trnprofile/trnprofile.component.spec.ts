import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrnprofileComponent } from './trnprofile.component';

describe('TrnprofileComponent', () => {
  let component: TrnprofileComponent;
  let fixture: ComponentFixture<TrnprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrnprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrnprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
