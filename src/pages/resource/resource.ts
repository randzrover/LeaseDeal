import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';

import { resourceDetailPage } from '../resource/details/resourceDetail';
import { LocalizationPage } from '../localization/localization';

@Component({
    selector: 'page-resource',
    templateUrl: 'resource.html'
})

export class ResourcePage{
    constructor(public navCtrl: NavController,public popoverCtl: PopoverController) { }
     
        navigateResource(){
            this.navCtrl.push(resourceDetailPage);
        }

        popLocalization(ctlEvent){
            let popover = this.popoverCtl.create(LocalizationPage);
            popover.present({
              ev: ctlEvent
            });
          }
    
    
}

