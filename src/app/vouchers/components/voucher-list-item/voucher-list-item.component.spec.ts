import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherListItemComponent } from './voucher-list-item.component';

describe('TestComponent', () => {
  let component: VoucherListItemComponent;
  let fixture: ComponentFixture<VoucherListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoucherListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
