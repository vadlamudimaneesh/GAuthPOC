import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GAuthOTPComponent } from './gauth-otp.component';

describe('GAuthOTPComponent', () => {
  let component: GAuthOTPComponent;
  let fixture: ComponentFixture<GAuthOTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GAuthOTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GAuthOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
