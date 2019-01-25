import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ArticlesDataProvider } from '../../providers/articles-data/articles-data';
import { ArticlePage } from '../article/article';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ArticlesDataProvider]
})
export class HomePage {
  articles: any = [];

  constructor(
    private articleData: ArticlesDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  read() {
    this.modalCtrl.create(ArticlePage).present();
  }

  ngOnInit() {
    this.getArticles()
  }

  getArticles () {
    this.articleData
      .getArticles()
      .subscribe(data => this.articles = data.json().articles)
  }

}