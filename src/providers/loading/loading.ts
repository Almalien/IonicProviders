import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  loader;

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log('Hello LoadingProvider Provider');
  }

    showLoad(){
      this.loader = this.loadingCtrl.create({
        content: "Loading, please wait...",
        
      });

      this.loader.present();
    }

    hideLoad(){
      this.loader.dismiss();

    }



}
