import { Component, OnInit } from '@angular/core';
import { InvoiceFlowService } from '../../../services/invoiceflow/invoiceflow.service';

@Component({
  selector: 'app-home',
  templateUrl: 'voucher-frontpage.page.html',
  styleUrls: ['voucher-frontpage.page.scss'],
})

export class VoucherFrontPage implements OnInit {

  vouchers: any;
  vouchersToBeApproved : number;
  amount: number;


  constructor(public invoiceFlowService: InvoiceFlowService) { }

  ngOnInit() {
    var date = new Date();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();
    var API = `http://msaflow.microsolutions.dk/Api/WorkFlow/List?filter=${currentYear}${currentMonth+1}`
    this.invoiceFlowService.getVoucherList(API).subscribe((data) => {
      this.vouchers = data;
      this.vouchersToBeApproved =  this.vouchers.length;
      this.amount = this.arrSum(this.vouchers)
    });
  }

  arrSum = function (arr) {
    var sum = 0;
    for(var i in arr) {
      sum += arr[i].GrossAmountStr
    }
    return sum;
  }

  
}


