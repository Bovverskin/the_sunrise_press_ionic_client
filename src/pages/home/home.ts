import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  article: any = {};

  constructor(public navCtrl: NavController) {
    this.article = { title: 'newsy', 
    description: 'this is a description', 
    image: '.src/assets/imgs/donut.png' };

  }

}
