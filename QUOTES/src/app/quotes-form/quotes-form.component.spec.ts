import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QUOTESFormComponent } from './quotes-form.component';

describe('QUOTESFormComponent', () => {
  let component: QUOTESFormComponent;
  let fixture: ComponentFixture<QUOTESFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QUOTESFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QUOTESFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
