import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the LoancalcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-loancalc',
  templateUrl: 'loancalc.html',
})
export class LoancalcPage {

  inp_amount:number;
  inp_rate:number;
  inp_varika:number;
  ans:number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoancalcPage');
  }

  calculate(){

  	console.log(this.ans = Number(this.inp_amount)*(Number(this.inp_rate)/100)/Number(this.inp_varika));
  }
  reset(){
    this.inp_amount = 0;
    this.inp_rate = 0;
    this.inp_varika = 0;
  }

}
