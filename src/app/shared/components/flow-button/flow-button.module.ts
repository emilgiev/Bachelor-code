import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../services/device/device.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FlowButtonComponent } from './flow-button.component';

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
    FlowButtonComponent
  ],
  exports: [
    FlowButtonComponent
  ]
})
export class FlowButtonModule { }