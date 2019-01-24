import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ArticleDataProvider } from '../../providers/article-data/article-data';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { ArticlePage } from '../article/article';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private apiUrl: string = 'https://the-sunrise-press.herokuapp.com/api'
  article: any = {};

  constructor(
    private articleData: ArticleDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public modalCtrl: ModalController) {
      this.http.get(this.apiUrl)
        .map((response: Response) => response.json())
        .subscribe(articles => {
          console.log(articles);
          this.article = articles.data;
        });
  }

  read() {
    this.modalCtrl.create(ArticlePage).present();
  }

  ionViewDidLoad() {
    this.articleData
      .getArticle()
      .subscribe(data => (this.article = data.entries));

  }

}