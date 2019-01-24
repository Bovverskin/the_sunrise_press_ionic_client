import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleDataProvider {

  constructor(private _tokenService: Angular2TokenService) {}

  getArticle() {
    return this._tokenService
      .get('article_data')
      .map(articles => articles.json());
  }

}