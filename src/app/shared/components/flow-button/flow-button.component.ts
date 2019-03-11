import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { PopoverSmallComponent } from '../flow-popover-small/popover-small.component';
import { PopoverLargeComponent } from '../flow-popover-large/popover-large.component';
import { Router } from '@angular/router';


@Component({
  selector: 'flow-button',
  templateUrl: 'flow-button.component.html',
  styleUrls: ['flow-button.component.scss']
})
export class FlowButtonComponent {

  @Input() index;

  popover: any;
  url: string;

  iconName: string = 'menu';
  classes: any = {
    'defaultStyle': true,
    'actionSmallStyle': false,
    'actionLargeStyle': false
  };

  constructor(
    public popoverController: PopoverController,
    private router: Router,) {
      this.url = this.router.url;
  }

  async presentPopover(ev: any) {
    if (this.url == "/vouchers/home" || this.url == "/settings") {
      this.popover = await this.popoverController.create({
        component: PopoverSmallComponent,
        event: ev,
        cssClass: 'popover-small'
      })
      this.actionSmallStyle();
    }
    else {
      this.popover = await this.popoverController.create({
        component: PopoverLargeComponent,
        event: ev,
        componentProps: { index: this.index },
        cssClass: 'popover-large',
      })
      this.actionLargeStyle();
    }
    this.dismissPopoverEvent();
    return await this.popover.present();
  }

  defaultStyle(){
    this.classes.actionSmallStyle = false;
    this.classes.actionLargeStyle = false;
    this.classes.defaultStyle = true;
    this.iconName = 'menu';
  }

  actionSmallStyle(){
    this.classes.actionSmallStyle = true;
    this.classes.defaultStyle = false;
    this.iconName = 'close';
  }

  actionLargeStyle(){
    this.classes.actionLargeStyle = true;
    this.classes.defaultStyle = false;
    this.iconName = 'close';
  }

  dismissPopoverEvent(){
    this.popover.onWillDismiss().then(() => {
      this.index = undefined;
      this.defaultStyle();
    });
  }

}
