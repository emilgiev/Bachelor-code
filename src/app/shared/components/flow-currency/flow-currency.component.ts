import { Component, Input} from '@angular/core';

@Component({
  selector: 'flow-currency',
  templateUrl: './flow-currency.component.html',
})

export class FlowCurrency {
  @Input() currencyAmount: number;
  @Input() currencySymbol: string;

  constructor() { }
}