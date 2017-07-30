import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoancalcPage } from '../pages/loancalc/loancalc';
import { NpvcalcPage } from '../pages/npvcalc/npvcalc';
import { DepocalcPage } from '../pages/depocalc/depocalc';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoancalcPage,
    NpvcalcPage,
    DepocalcPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoancalcPage,
    NpvcalcPage,
    DepocalcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
