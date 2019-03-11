import { Component, OnInit, Input } from '@angular/core';
import { Voucher } from '../../../models/voucher.model';

@Component({
  selector: 'voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.scss']
})
export class VoucherDetailsComponent implements OnInit {
  @Input() voucher: Voucher;

  constructor() { }

  ngOnInit() {
  }

}
