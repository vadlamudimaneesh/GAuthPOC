import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GAuthComponent } from './gauth.component';

describe('GAuthComponent', () => {
  let component: GAuthComponent;
  let fixture: ComponentFixture<GAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
