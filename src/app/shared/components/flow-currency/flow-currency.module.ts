import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FlowCurrency } from './flow-currency.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  providers: [
    DecimalPipe
  ],
  declarations: [
    FlowCurrency
  ],
  exports: [
    FlowCurrency
  ]
})
export class FlowCurrencyModule { }