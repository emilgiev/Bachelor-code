import { Component,  } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'flow-image-gallery',
  templateUrl: './flow-image-gallery.component.html',
  styleUrls: ['./flow-image-gallery.component.scss'],
})

export class FlowImageGallery {

  images: any = [
    {
      "title": 'Microsolutions A/S',
      "img": "https://images.template.net/wp-content/uploads/2015/11/12214759/Director-Resignation-Letter-Example-PDF-Free-Download.jpg",
    },
    {
      "title": 'Monitors and Cables',
      "img": 'https://image.slidesharecdn.com/fifthlettertotheboardtransparencyredacted-141227162101-conversion-gate01/95/fifth-letter-to-the-board-staff-contact-whistleblower-policy-and-transparency-1-638.jpg?cb=1419697414',
    },
    {
      "title": 'Chairs Contract ',
      "img": 'https://image.slidesharecdn.com/resignation-of-a-member-of-the-board-of-directors-140717120136-phpapp01/95/press-release-resignation-of-a-member-of-the-board-of-directors-1-638.jpg?cb=1405598617',
    }
  ];

  constructor(public modalCtrl: ModalController) {}

  dismiss(){
    this.modalCtrl.dismiss();
  }  

}


