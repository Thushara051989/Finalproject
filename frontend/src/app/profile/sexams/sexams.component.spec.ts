import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexamsComponent } from './sexams.component';

describe('SexamsComponent', () => {
  let component: SexamsComponent;
  let fixture: ComponentFixture<SexamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
