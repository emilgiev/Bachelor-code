import { Component, Input } from '@angular/core';
import { NavController, PopoverController, ModalController } from '@ionic/angular';
import { FlowImageGallery } from '../flow-image-gallery/flow-image-gallery.component';
import { AppStateService } from '../../../services/invoiceflow/appState.service';

@Component({
  selector: 'popover-large',
  templateUrl: 'popover-large.component.html'
})
export class PopoverLargeComponent {

  @Input() index: any;
  isDisabled: boolean = true;

  constructor(
    public navCtrl: NavController,
    public popoverController: PopoverController,
    public modalCtrl: ModalController,
    public appStateService : AppStateService) {}

  ionViewDidEnter(){
    if(this.index != ""){
      this.isDisabled = false;
    }
  }

  approve() {
    this.appStateService.publish(`${this.index}`)
  }

  cancel() {
    this.appStateService.publish(`${this.index}`)
  }

  async showImages() {
    console.log('Show images on: ', `${this.index}`)
    const modal = await this.modalCtrl.create({
      component: FlowImageGallery
    })
    await modal.present();
  }

  navigateToHome() {
    this.popoverController.dismiss();
    this.navCtrl.navigateForward('/vouchers/home');
  }

  navigateToSettings() {
    this.popoverController.dismiss();
    this.navCtrl.navigateRoot('/settings');
  }
}
