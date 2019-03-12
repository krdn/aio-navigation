import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Polling3Component } from './polling3.component';

describe('Polling3Component', () => {
  let component: Polling3Component;
  let fixture: ComponentFixture<Polling3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Polling3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Polling3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
