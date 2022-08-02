import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmessagesComponent } from './smessages.component';

describe('SmessagesComponent', () => {
  let component: SmessagesComponent;
  let fixture: ComponentFixture<SmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
