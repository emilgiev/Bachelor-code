import { Component, Input } from '@angular/core';
import { Voucher } from '../../../models/voucher.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'voucher-list-item',
  templateUrl: './voucher-list-item.component.html'
})

export class VoucherListItemComponent {

  @Input() voucher: Voucher;

  constructor(
    public navCtrl: NavController
  ) {

  }

  goToVoucherDetails(_voucher: Voucher) {
    this.navCtrl.navigateForward('/vouchers/details/' + _voucher.id);
  }
}