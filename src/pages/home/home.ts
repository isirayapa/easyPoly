import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoancalcPage } from '../loancalc/loancalc';
import { DepocalcPage } from '../depocalc/depocalc'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loancalcPage(){
  	this.navCtrl.push(LoancalcPage);
  }
  depocalcPage(){
  	this.navCtrl.push(DepocalcPage);
  }

}
