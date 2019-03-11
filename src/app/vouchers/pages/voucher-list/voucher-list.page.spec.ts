import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherListPage } from './voucher-list.page';

describe('VoucherListPage', () => {
  let component: VoucherListPage;
  let fixture: ComponentFixture<VoucherListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
