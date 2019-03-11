import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SettingsPage } from './settings.page';
import { ProfilePage } from './profile-page/profile-page';
import { FlowPage } from './flow-page/flow-page';
import { FlowPageHeaderModule } from '../../../shared/components/flow-page-header/flow-page-header.module';

import { SettingsModel } from '../../../models/settings.model';
import { SettingsFlowService } from '../../../services/invoiceflow/settingsflow.service';
import { AuthFlowService } from '../../../services/invoiceflow/authflow.service';
import { FlowBackButtonModule } from '../../../shared/components/flow-back-button/flow-back-button.module';
import { FlowButtonModule } from '../../../shared/components/flow-button/flow-button.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'flow',
    component: FlowPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FlowPageHeaderModule,
    FlowBackButtonModule,
    FlowButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SettingsModel,
    SettingsFlowService,
    SettingsPage,
    AuthFlowService
  ],
  declarations: [SettingsPage,
    ProfilePage,
    FlowPage
    
  ]
})
export class SettingsPageModule { }