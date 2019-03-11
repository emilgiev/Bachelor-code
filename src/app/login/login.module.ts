import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

import { IonicStorageModule } from '@ionic/storage';
import { AuthFlowService } from '../services/invoiceflow/authflow.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])  
  ],
  providers: [AuthFlowService],
  declarations: [LoginPage]
})
export class LoginPageModule {}
