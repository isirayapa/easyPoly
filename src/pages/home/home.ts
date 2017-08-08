import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoancalcPage } from '../loancalc/loancalc';
import { DepocalcPage } from '../depocalc/depocalc';
import { NpvcalcPage } from '../npvcalc/npvcalc';
import { RoiCalcPage } from'../roi-calc/roi-calc';

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
  npvcalcPage(){
    this.navCtrl.push(NpvcalcPage);
  }
  roicalcPage(){
    this.navCtrl.push(RoiCalcPage);
  }

}
