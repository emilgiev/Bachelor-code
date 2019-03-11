import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherFrontPage } from './voucher-frontpage.page';

describe('HomePage', () => {
  let component: VoucherFrontPage;
  let fixture: ComponentFixture<VoucherFrontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoucherFrontPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherFrontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
