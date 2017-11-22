import { Component } from '@angular/core';
import { LoadingController,PopoverController,ViewController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
    selector: 'page-localization',
    templateUrl: 'localization.html'
})

export class LocalizationPage{
    constructor(public loadingCtl: LoadingController,public popoverCtl : ViewController){}
    
    changeLanguage(){
        
        this.popoverCtl.dismiss();

        let loader = this.loadingCtl.create({
            content: 'Please wait...',
            duration:3000
        });

        loader.present();
    }
}