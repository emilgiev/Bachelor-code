import { Component, OnInit, OnDestroy } from '@angular/core';
import { InvoiceFlowService } from '../../../services/invoiceflow/invoiceflow.service';
import { FlowPageHeaderTab } from '../../../shared/models/flow-page-header-tabs.model';
import { FlowBarchartData, FlowBarChartPoint } from '../../../shared/models/flow-barchart-data.model';
import { Storage } from '@ionic/storage';
import { SettingsFlowService } from '../../../services/invoiceflow/settingsflow.service';
import { AppStateService } from '../../../services/invoiceflow/appState.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: 'voucher-list.page.html',
  styleUrls: ['voucher-list.page.scss'],
})
export class VoucherListPage implements OnInit,OnDestroy {

  constructor(
    public invoiceFlowService: InvoiceFlowService,
    public settingsFlowService: SettingsFlowService,
    public storage: Storage,
    public appStateService : AppStateService) { }

  destroy = new Subject()
  clickedMonth: any;
  itemIndex: any;
  currencyAmount: number;
  vouchers: any;
  dataAvg: FlowBarchartData;
  activePoints: string[] = [];
  dataMax: any;
  activePoints2: string[] = [];
  dataNone: any;
  activePoints3: string[] = [];

  classes: any = [];

  tabs: FlowPageHeaderTab[] = [
    {
      id: 'overview',
      name: 'ÅBNE',
      active: true
    },
  ]

  generateData() {
    this.dataAvg = {
      "points": [{
        "id": "1",
        "label": "",
        "value": null,
        "count": null
      }],
      "average": null,
      "max": null,
      "barChartLineMode": 0,
      "barChartPeriodType": 1,
      "amountMultiplier": -1
    };
  }

  pointClicked(point: any) {
    if (point != null || point != undefined) {
      var API = `http://msaflow.microsolutions.dk/Api/WorkFlow/List?filter=${point}`
      this.invoiceFlowService.getVoucherList(API).subscribe((data: any) => {
        this.vouchers = data.map((item) => {
          return {
            Approvers: item.Approvers,
            CurrencyCode: item.CurrencyCode,
            CustomSearch: item.CustomSearch,
            DueDateFormatted: item.DueDateFormatted,
            GrossAmountStr: item.GrossAmountStr,
            InvoiceDateFormatted: item.InvoiceDateFormatted,
            InvoiceId: item.InvoiceId,
            InvoiceNoStr: item.InvoiceNoStr,
            JournalApprovalPosted: item.JournalApprovalPosted,
            JournalRegisterPosted: item.JournalRegisterPosted,
            NetAmountStr: item.NetAmountStr,
            PostingTxt: item.PostingTxt,
            Status: item.Status,
            VATAmountStr: item.VATAmountStr,
            Vendor: item.Vendor,
            customId: item.customId,
            dataAreaId: item.dataAreaId,
            hasUserNote: item.hasUserNote,
            voucherType: item.voucherType,
            isApproved: false
          }
        });
        this.getClickedMonth(point);
      });
    }
    this.activePoints.includes(point) ? this.activePoints = this.activePoints.filter(item => item !== point) : this.activePoints.push(point);
  }

  onTabChanged(tabName: string) {
    this.tabs.find(tab => tab.active == true).active = false;
    this.tabs.find(tab => tab.id == tabName).active = true;
  }

  getIndex(i) {
    this.itemIndex = i;
    return this.itemIndex;
  }

  mapDataToBarChartPoint(_data: any[]): FlowBarChartPoint[] {
    let array: FlowBarChartPoint[] = [];
    _data.map((point) => {
      let barChartPoint: FlowBarChartPoint = {
        id: point.id,
        value: point.amount,
        count: point.qty,
        label: point.label
      };
      array.push(barChartPoint);
    })
    return array;
  }

  ngOnInit() {

    var date = new Date();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();

    var yearAndMonth = `${currentYear}${currentMonth + 1}`
    this.getClickedMonth(yearAndMonth);

    this.settingsFlowService.getData('apiURL').then((api) => {

      this.invoiceFlowService.getVoucherOverview(api).subscribe((data) => {
        this.generateData();
        this.dataAvg.points = this.mapDataToBarChartPoint(data);

        this.currencyAmount = this.arrSum(data)
        this.dataAvg.average = this.arrAverage(data)
        this.dataAvg.max = this.arrMax(data)
      })
    })
    
    var API = `http://msaflow.microsolutions.dk/Api/WorkFlow/List?filter=${currentYear}${currentMonth + 1}`
    this.invoiceFlowService.getVoucherList(API).subscribe((data) => {
      this.vouchers = data;
    });

    this.appStateService.event.pipe(takeUntil(this.destroy)).subscribe((data : any) => {
      if(!this.vouchers[data].isApproved){
        this.approve(data);
      }
      else if(this.vouchers[data].isApproved){
        this.cancel(data);
      }
    });
  }

  arrSum = function (arr) {
    var sum = 0;
    for (var i in arr) {
      sum += arr[i].amount
    }
    return sum;
  }

  arrAverage = function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i].amount
    }
    total /= arr.length;
    return total
  }

  arrMax = function (arr) {
    var amounts = []
    for (var i = 0; i < arr.length; i++) {
      amounts.push(arr[i].amount)
    }
    return Math.max.apply(null, amounts);
  }

  approve(index){
    this.classes[index] = {
      canceled : false,
      isApproved : true
    } 
  }

  cancel(index){
    this.classes[index] = {
      canceled : true,
      isApproved : false
    } 
  }

  getClickedMonth(point) {
    switch (point) {
      case '201801': this.clickedMonth = "January";
        break;
      case '201802': this.clickedMonth = "February";
        break;
      case '201803': this.clickedMonth = "March";
        break;
      case '201804': this.clickedMonth = "April";
        break;
      case '201805': this.clickedMonth = "May";
        break;
      case '201806': this.clickedMonth = "June";
        break;
      case '201807': this.clickedMonth = "July";
        break;
      case '201808': this.clickedMonth = "August";
        break;
      case '201809': this.clickedMonth = "September";
        break;
      case '201810': this.clickedMonth = "October";
        break;
      case '201811': this.clickedMonth = "November";
        break;
      case '201812': this.clickedMonth = "December";
        break;
    }
  }

  ngOnDestroy() {
    this.destroy.next()
  }

}
