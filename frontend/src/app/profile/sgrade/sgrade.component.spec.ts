import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgradeComponent } from './sgrade.component';

describe('SgradeComponent', () => {
  let component: SgradeComponent;
  let fixture: ComponentFixture<SgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
