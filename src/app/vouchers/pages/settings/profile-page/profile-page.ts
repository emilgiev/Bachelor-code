import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettingsFlowService } from '../../../../services/invoiceflow/settingsflow.service';
import { SettingsModel } from '../../../../models/settings.model';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.html',
  styleUrls: ['./profile-page.scss'],
})

export class ProfilePage {
  language: string;

  constructor(public navCtrl: NavController,
    public settingsFlowService: SettingsFlowService,
    public settingsModel: SettingsModel
  ) { }

  ionViewWillEnter() {
    this.settingsFlowService.getData('language').then((data) => {
      if (data == undefined || data == null) {
        // set it to Danish as a default language
        this.language = 'Danish'
      }
      else {
        this.language = data;
        this.settingsModel.language = this.language;
      }
    })
  }

  ionViewWillLeave() {
    this.setLanguage();
  }

  setLanguage() {
    this.settingsFlowService.setData('language', this.language)
  }
}