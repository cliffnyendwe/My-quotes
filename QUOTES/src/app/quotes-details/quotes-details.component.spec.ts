import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QUOTESDetailsComponent } from './quotes-details.component';

describe('QUOTESDetailsComponent', () => {
  let component: QUOTESDetailsComponent;
  let fixture: ComponentFixture<QUOTESDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QUOTESDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QUOTESDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
