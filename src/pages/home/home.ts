import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';

import { LocalizationPage } from '../localization/localization';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public popCtl: PopoverController){}

  popLocalization(ctlEvent){
    let popover = this.popCtl.create(LocalizationPage);
    popover.present({
      ev: ctlEvent
    });
  }

}
