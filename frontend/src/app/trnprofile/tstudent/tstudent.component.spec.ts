import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstudentComponent } from './tstudent.component';

describe('TstudentComponent', () => {
  let component: TstudentComponent;
  let fixture: ComponentFixture<TstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
