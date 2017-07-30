import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DepocalcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-depocalc',
  templateUrl: 'depocalc.html',
})
export class DepocalcPage {
  inp_amount:number;
  inp_rate:number;
  inp_varika:number;
  ans:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculate(){

  	console.log(this.ans = Number(this.inp_amount)*(Number(this.inp_rate)/100)/Number(this.inp_varika));
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepocalcPage');
  };

};
