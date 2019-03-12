import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BithumbComponent } from './bithumb.component';

describe('BithumbComponent', () => {
  let component: BithumbComponent;
  let fixture: ComponentFixture<BithumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BithumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BithumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
