import { Injectable } from '@angular/core';

import { InvoiceFlowService } from './invoiceflow.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthFlowService {
  token: any;

  constructor(
    public invoiceFlowService: InvoiceFlowService,
    public alertController: AlertController,
    private storage: Storage,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController) {
    this.getTokenAsync();
  }

  logout() {
    this.storage.remove('token');
  }

  isLoggedIn(): boolean {
    if (this.token == null || this.token == undefined) {
      return false;
    }
    return true;
  }

  login(username: string, password: string) {
    this.invoiceFlowService.login(username, password).pipe(map(res => {
      this.storage.set('username', username);
      this.storage.set('token', res.access_token);
      return { username: username, token: res.access_token };
    })).subscribe(res => {
      console.log('user: ', res);
      this.presentLoadingDefault();
    })
  }

  //check for inputs
  async missingCredentials() {
    const missingCredentials = await this.alertController.create({
      subHeader: 'Error',
      message: 'You cannot have empty fields',
      buttons: ['OK']
    });
    await missingCredentials.present();
  }

  async wrongCredentials() {
    const wrongCredentials = await this.alertController.create({
      subHeader: 'Error',
      message: 'Incorrect Username And/Or Password',
      buttons: ['OK']
    });
    await wrongCredentials.present();
  }

  async getToken() {
    return await this.storage.get('token');
  }

  async getTokenAsync() {
    this.token = await this.getToken();
    console.log('Token: \n',this.token)
  }

  // loading spinner
  async presentLoadingDefault() {
    let loading = await this.loadingCtrl.create({
      'message': 'Please wait...'
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
    this.navCtrl.navigateForward('/vouchers/home');
  }


}