/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewChildComponent } from './new-child.component';

describe('NewChildComponent', () => {
  let component: NewChildComponent;
  let fixture: ComponentFixture<NewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
