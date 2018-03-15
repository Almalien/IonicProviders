import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule, Http} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SongProvider } from '../providers/songs/song';
import {HttpClientModule} from '@angular/common/http';
import { LoadingProvider } from '../providers/loading/loading';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SongProvider,
    LoadingProvider
  ]
})
export class AppModule {}
