import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsettingsComponent } from './ssettings.component';

describe('SsettingsComponent', () => {
  let component: SsettingsComponent;
  let fixture: ComponentFixture<SsettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
