import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'grid-line',
  templateUrl: 'grid-line.html',
  styleUrls: ['grid-line.scss'],
})
export class FlowFrontpageGridLine {

  @Input() title: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() amount: string;
  @Input() backText: string;
  @Input() navigateTo: string;
 
  constructor(public navCtrl: NavController) {}

  navigateForward(){
    this.navCtrl.navigateForward(this.navigateTo);
  }
}
