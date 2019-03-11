import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'flow-chart-bubble',
  templateUrl: './flow-chart-bubble.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./flow-chart-bubble.component.scss'],
})

export class FlowChartBubble {
  @Input() top: string;
  @Input() value: string;
  @Input() text: string;
  @Input() 
  set isCurrency(isCurrency: boolean) {
    this._isCurrency = isCurrency;
    this.formatCurrency();
  }
  _isCurrency: boolean = false;

  formatCurrency() {
    if(this._isCurrency)
      this.value = this.dp.transform(this.value, "1.2-2")
  }

  constructor(private dp: DecimalPipe) { }
}