import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NpvcalcPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-npvcalc',
  templateUrl: 'npvcalc.html',
})
export class NpvcalcPage {
	inp_inv:number;
	inp_Cf:any;
	arr:any= [];
	tmp_cf:number;
	DiscFactor:number=0.03;
	ans:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NpvcalcPage');
  }
  addCf(){
  	this.arr.push(Number(this.inp_Cf));
  }

  Cashflowdifference(){
  //	this.ans = this.inp_inv-this.tmp_cf;
  	this.ans = Math.floor((this.calcCF()-this.inp_inv)*100)/100;
  	console.log(this.ans);

  }

  calcCF = function(){
  	var a:number=0;
  	for(var i= this.arr.length;0<i;i--){
  		a += (Number(this.arr[i-1])*(Math.pow(1-(this.DiscFactor),i)));
  	}
  	return a;
  }

}
