/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertParentComponent } from './alert-parent.component';

describe('AlertParentComponent', () => {
  let component: AlertParentComponent;
  let fixture: ComponentFixture<AlertParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
