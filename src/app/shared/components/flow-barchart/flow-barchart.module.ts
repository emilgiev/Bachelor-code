import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowBarchartComponent } from './flow-barchart.component';
import { FlowBarchartService } from './flow-barchart.service';
import { FlowChartBubble } from '../flow-chart-bubble/flow-chart-bubble.component';
import { DecimalPipe } from '@angular/common'

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  providers: [
    FlowBarchartService,
    DecimalPipe
  ],
  declarations: [
    FlowBarchartComponent,
    FlowChartBubble
  ],
  exports: [
    FlowBarchartComponent,
    FlowChartBubble
  ]
})
export class FlowBarchartModule { }