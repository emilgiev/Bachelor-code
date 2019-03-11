import { Component } from '@angular/core';
import { InvoiceFlowService } from '../../../services/invoiceflow/invoiceflow.service';
import { Voucher } from '../../../models/voucher.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'voucher-details.page.html',
  styleUrls: ['voucher-details.page.scss'],
})
export class VoucherDetailsPage {
  public voucher: Voucher;

  constructor(
    public invoiceFlowService: InvoiceFlowService,
    private route: ActivatedRoute
  ) {}
}
