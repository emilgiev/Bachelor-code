import { Component, Input } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

import { InvoiceFlowService } from '../services/invoiceflow/invoiceflow.service';
import { AuthFlowService } from '../services/invoiceflow/authflow.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {

  @Input() uname: string;
  @Input() password: string;

  constructor(
    public navCtrl: NavController,
    public alertController: AlertController,
    public invoiceFlowService: InvoiceFlowService,
    public authFlowService: AuthFlowService,
  ) { }

  login() {
    if(this.uname != "SAL" || this.password != "Sommer2018!") {
      return this.authFlowService.wrongCredentials();
    }
    else if (this.isLoggedIn()) {
      this.authFlowService.presentLoadingDefault();
    }
    else {
      this.authFlowService.login(this.uname, this.password); 
    }
  }
  logout() {
    this.authFlowService.logout();
  }

  isLoggedIn() {
    return this.authFlowService.isLoggedIn();
  }
}

