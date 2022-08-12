import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcontentComponent } from './tcontent.component';

describe('TcontentComponent', () => {
  let component: TcontentComponent;
  let fixture: ComponentFixture<TcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
