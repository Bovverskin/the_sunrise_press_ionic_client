import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operators';

@Injectable()
export class ArticlesDataProvider {

  constructor(private http: Http) {}

  getArticles() {
    return this.http
      .get('http://localhost:3000/api/articles')
  }

}