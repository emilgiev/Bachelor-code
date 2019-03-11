import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PreviousRouteService } from '../../../services/invoiceflow/previousRoute.service';

@Component({
  selector: 'flow-back-button',
  templateUrl: './flow-back-button.component.html',
  styleUrls: ['./flow-back-button.component.scss'],
})

export class FlowBackButton implements OnInit {
  
  canGoBack: boolean = false;
  previousUrl: string;

  constructor(
    public navCtrl: NavController,
    private previousRouteService: PreviousRouteService) {
  }

  ngOnInit() {
    this.previousUrl = this.previousRouteService.getPreviousUrl();
    if(this.previousUrl == undefined || this.previousUrl == "" ){
      console.log('Previous URL does not exist');
      this.canGoBack = false;
    }
    else {
      console.log('Previous URL', this.previousUrl);
      this.canGoBack = true;
    }
  }

  navigateBackwards() {
    if(this.canGoBack){
      this.navCtrl.navigateBack(this.previousUrl);
    }
  }
  


}