/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewChild1Component } from './view-child1.component';

describe('ViewChild1Component', () => {
  let component: ViewChild1Component;
  let fixture: ComponentFixture<ViewChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
