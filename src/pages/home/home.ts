import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ArticleDataProvider } from '../../providers/article-data/article-data';
import { ArticlePage } from '../article/article';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  articles: any = [];

  constructor(
    private articleData: ArticleDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  read() {
    this.modalCtrl.create(ArticlePage).present();
  }

  ngOnInit() {
    this.articleData
      .getArticles()
      .subscribe(data => this.articles = data.json().articles)
  }

}