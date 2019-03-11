import { Component } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'popover-small',
  templateUrl: 'popover-small.component.html'
})
export class PopoverSmallComponent {

  constructor (
    public navCtrl: NavController,
    public popoverController: PopoverController) {}

    navigateToHome(){
      this.popoverController.dismiss();
      this.navCtrl.navigateForward('/vouchers/home');
    }
  
    navigateToSettings(){
      this.popoverController.dismiss();
      this.navCtrl.navigateRoot('/settings');
    }
}
