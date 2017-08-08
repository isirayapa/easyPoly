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
  ans_tot_int:number;
  ans_tot:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculate(){

    this.ans_tot_int = Number(this.inp_amount)*(Number(this.inp_rate)*Number(this.inp_varika)/1200);
    this.ans_tot = Number(this.inp_amount)+ Number(this.inp_amount)*(Number(this.inp_rate)*Number(this.inp_varika)/1200);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepocalcPage');
  };

};
