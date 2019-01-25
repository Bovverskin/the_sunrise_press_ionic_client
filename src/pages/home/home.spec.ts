import { HomePage } from "./home";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";
import { Http, BaseRequestOptions } from '@angular/http'
import { MockBackend } from '@angular/http/testing';
import { ArticlesDataProvider } from "../../providers/articles-data/articles-data";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { ArticlesDataMock } from "../../../test-config/articles-data-mock";

describe("HomePage", () => {
    let homepage, fixture, articles;

    articles = {"articles":[{"id":1,"title":"US shutdown: Senate rejects bills to re-open government","description":"The US Senate has rejected two bills to end the government shutdown, leaving no end in sight to the record-breaking closure of federal agencies.","content":"The Republican legislation failed by 50-47 and the Democratic bill followed suit by 52-44. Each bill needed 60 votes to move forward. Meanwhile, 800,000 federal workers missed another payday on Friday. At 34 days with no end in sight, this is the longest shutdown in US history.","created_at":"2019-01-25T09:17:46.291Z","user":{"name":"Christiane Amanpour","email":"journalist@mail.com"},"category":{"name":"General"}},{"id":2,"title":"US shutdown: Senate rejects bills to re-open government","description":"The US Senate has rejected two bills to end the government shutdown, leaving no end in sight to the record-breaking closure of federal agencies.","content":"The Republican legislation failed by 50-47 and the Democratic bill followed suit by 52-44. Each bill needed 60 votes to move forward. Meanwhile, 800,000 federal workers missed another payday on Friday. At 34 days with no end in sight, this is the longest shutdown in US history.","created_at":"2019-01-25T09:17:46.766Z","user":{"name":"Christiane Amanpour","email":"journalist@mail.com"},"category":{"name":"General"}},{"id":3,"title":"Rafael Nadal crushes Stefanos Tsitsipas to reach Australian Open final","description":"Second seed Rafael Nadal ended Greek youngster Stefanos Tsitsipas captivating run to reach his fifth Australian Open final.","content":"Nadal, 32, was in devastating form as he beat the 20-year-old 14th seed 6-2 6-4 6-0 in one hour and 46 minutes. The Spaniard cracked 28 winners, breaking Tsitsipas serve six times and only facing one break point himself. He will play either top seed Novak Djokovic or Frances Lucas Pouille - who meet on Friday - in Sundays final.","created_at":"2019-01-25T09:17:46.895Z","user":{"name":"Christiane Amanpour","email":"journalist@mail.com"},"category":{"name":"Sports"}},{"id":4,"title":"Rafael Nadal crushes Stefanos Tsitsipas to reach Australian Open final","description":"Second seed Rafael Nadal ended Greek youngster Stefanos Tsitsipas captivating run to reach his fifth Australian Open final.","content":"Nadal, 32, was in devastating form as he beat the 20-year-old 14th seed 6-2 6-4 6-0 in one hour and 46 minutes. The Spaniard cracked 28 winners, breaking Tsitsipas serve six times and only facing one break point himself. He will play either top seed Novak Djokovic or Frances Lucas Pouille - who meet on Friday - in Sundays final.","created_at":"2019-01-25T09:17:48.306Z","user":{"name":"Christiane Amanpour","email":"journalist@mail.com"},"category":{"name":"Sports"}}]}

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomePage
            ],
            imports: [IonicModule.forRoot(HomePage)],
            providers: [
                { provide: Platform, useFactory: () => PlatformMock.instance() },
                { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
                { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
                { provide: NavController, useFactory: () => NavControllerMock.instance() },
                { provide: NavParams, useFactory: () => NavParamsMock.instance() },
                {provide: ArticlesDataProvider, useClass: () => ArticlesDataMock },
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: (backend, defaultOptions) => {
                        return new Http(backend, defaultOptions)
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
            ]
        }).compileComponents();
    }));

    beforeEach(inject(
        [ArticlesDataProvider], articles_data => {
        //spyOn(articles_data, "getArticles").and.returnValue(Observable.of(articles));
        //spyOn(service, 'get').and.returnValue(Observable.of(article));
        fixture = TestBed.createComponent(HomePage);
        homepage = fixture.componentInstance;
        }));

    it('should create the home page', () => {
        expect(homepage).toBeTruthy();
        expect(homepage instanceof HomePage).toEqual(true);
    });

    it('should have a articles', () => {
        homepage.getArticles
        expect(homepage.articles).toEqual(articles);
    });

    it('should have read function', () => {
        spyOn(homepage, 'read');
        homepage.read()
        expect(homepage.read).toHaveBeenCalled();
    });

});