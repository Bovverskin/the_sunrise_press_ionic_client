import { HomePage } from "./home";
import { TestBed, async, inject } from "@angular/core/testing";
import { IonicModule, Platform, NavController, NavParams } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock } from "ionic-mocks";
import { Http, BaseRequestOptions } from '@angular/http'
import { MockBackend } from '@angular/http/testing';
import { ArticlesDataProvider } from "../../providers/articles-data/articles-data";
import 'rxjs/add/observable/of';

describe("HomePage", () => {
    let homepage, fixture;

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
                ArticlesDataProvider,
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

    beforeEach (() => {
        fixture = TestBed.createComponent(HomePage);
        homepage = fixture.componentInstance;
        });

    it('should create the home page', () => {
        expect(homepage).toBeTruthy();
        expect(homepage instanceof HomePage).toEqual(true);
    });

    it('should have read function', () => {
        spyOn(homepage, 'read');
        homepage.read()
        expect(homepage.read).toHaveBeenCalled();
    });

});