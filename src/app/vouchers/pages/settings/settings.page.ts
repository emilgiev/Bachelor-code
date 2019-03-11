import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettingsModel } from '../../../models/settings.model';
import { SettingsFlowService } from '../../../services/invoiceflow/settingsflow.service';
import { AuthFlowService } from '../../../services/invoiceflow/authflow.service';
import { PreviousRouteService } from '../../../services/invoiceflow/previousRoute.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit{
  username: any;
  previousUrl: string;

  constructor(public navCtrl: NavController,
    public settingsModel: SettingsModel,
    public settingsFlowService: SettingsFlowService,
    public authFlowService: AuthFlowService,
    public previousRouteService: PreviousRouteService
  ) { }


  ngOnInit(){
    this.previousUrl = this.previousRouteService.getPreviousUrl();
  }

  async ionViewWillEnter() {
    this.username = await this.settingsFlowService.getData('username');
    this.settingsModel.username = this.username;
  }

  profilePage() {
    this.navCtrl.navigateForward('settings/profile');
  }

  flowPage() {
    this.navCtrl.navigateForward('settings/flow');
  }

  logout(){
    this.authFlowService.logout();
    this.navCtrl.navigateForward('');
  }
}
