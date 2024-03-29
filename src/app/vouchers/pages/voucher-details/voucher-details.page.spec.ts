import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherDetailsPage } from './voucher-details.page';

describe('HomePage', () => {
  let component: VoucherDetailsPage;
  let fixture: ComponentFixture<VoucherDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoucherDetailsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
