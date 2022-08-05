import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassignmentsComponent } from './sassignments.component';

describe('SassignmentsComponent', () => {
  let component: SassignmentsComponent;
  let fixture: ComponentFixture<SassignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SassignmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
