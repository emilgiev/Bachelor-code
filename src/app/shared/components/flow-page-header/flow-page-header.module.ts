import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowBarchartModule } from '../flow-barchart/flow-barchart.module';
import { FlowPageHeader } from './flow-page-header.component';
import { FlowCurrencyModule } from '../flow-currency/flow-currency.module';
import { FlowPageHeaderScroll } from '../../directives/flow-page-header-scroll.directive';
import { DeviceService } from '../../services/device/device.service';
import { NavigationService } from '../../services/navigation/navigation.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FlowBarchartModule,
    FlowCurrencyModule
  ],
  providers: [
    DeviceService,
    NavigationService
  ],
  declarations: [
    FlowPageHeader,
    FlowPageHeaderScroll,
  ],
  exports: [
    FlowPageHeader,
    FlowPageHeaderScroll,
  ]
})
export class FlowPageHeaderModule { }