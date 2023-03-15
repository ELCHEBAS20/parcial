/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepuestosComponent } from './Repuestos.component';

describe('RepuestosComponent', () => {
  let component: RepuestosComponent;
  let fixture: ComponentFixture<RepuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
