import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QUOTESComponent } from './quotes.component';

describe('QUOTESComponent', () => {
  let component: QUOTESComponent;
  let fixture: ComponentFixture<QUOTESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QUOTESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QUOTESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
