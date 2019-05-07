import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('http://www.ffos.unios.hr/')">
        <ion-label>Filozofski fakultet Osijek</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://www.osijek.hr/')">
        <ion-label>Grad Osijek</ion-label>
      </ion-item>
      <ion-item button (click)="close('http://infodaska2019.ffos.hr/index.html')">
        <ion-label>InfoDaska 2019</ion-label>
      </ion-item>
 
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
