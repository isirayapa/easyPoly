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
  int_per_month:number;
  total_per_month:number;
  total_interest:number;
  total_amout:number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoancalcPage');
  }

  calculate(){

  	this.total_interest = Math.floor((Number(this.inp_amount)*(Number(this.inp_rate)*Number(this.inp_varika)/1200))*100)/100;
    this.total_amout = Math.floor((Number(this.inp_amount)+Number(this.inp_amount)*(Number(this.inp_rate)*Number(this.inp_varika)/100))*100)/100;
    this.int_per_month = Math.floor((Number(this.inp_amount)*(Number(this.inp_rate)/1200))*100)/100;
    this.total_per_month = Math.floor((Number(this.inp_amount)*(1+Number(this.inp_rate)/1200))*100)/100;
    

  }
  reset(){
    this.inp_amount = 0;
    this.inp_rate = 0;
    this.inp_varika = 0;
    this.int_per_month = 0;
    this.total_per_month = 0;
    this.total_interest = 0;
    this.total_amout = 0;
  }

}
