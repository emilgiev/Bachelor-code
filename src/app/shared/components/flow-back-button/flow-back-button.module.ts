import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../services/device/device.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FlowBackButton } from './flow-back-button.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  providers: [
    DeviceService,
    NavigationService
  ],
  declarations: [
    FlowBackButton
  ],
  exports: [
    FlowBackButton
  ]
})
export class FlowBackButtonModule { }