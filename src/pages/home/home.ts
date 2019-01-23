import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  article: any = {};

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
      this.article = {
        title: 'newsy',
        description: 'this is a description',
        image: '.src/assets/imgs/donut.png'
      };
    }

  read() {
    this.modalCtrl.create(ArticlePage).present();
  }
}