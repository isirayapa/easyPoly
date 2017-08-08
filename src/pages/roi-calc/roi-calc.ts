import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoiCalcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-roi-calc',
  templateUrl: 'roi-calc.html',
})
export class RoiCalcPage {

	startDate:any;
	endDate:any;
	inp_inv:number;
	inp_return:number;
	inp_Drate:number;
	out_ROI:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.inp_Drate = 3;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoiCalcPage');
  }
  calculate(){
  	this.out_ROI = ((Number(this.inp_return)*(1-(Number(this.inp_Drate)/100))-Number(this.inp_inv)))*100/Number(this.inp_inv);

  };

  reset(){
  	this.inp_inv = 0;
  	this.inp_return = 0;
  	this.out_ROI = 0;

  };

}
