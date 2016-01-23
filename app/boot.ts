import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {Http, Headers} from 'angular2/http';
import {Project} from './models/project';

import {Subject} from 'rxjs/Subject';

import {AppComponent} from './app.component';
import {ProjectService} from './services/project.service';
import {UrlResolver} from "angular2/compiler";

class BaseOptions extends BaseRequestOptions {
    url: string = 'http://localhost:8080/mock/api/v1/';
    headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });
}

class MyUrlResolver extends UrlResolver {
    resolve(baseUrl: string, url: string): string {
        // Serve CSS files from a special CDN.
        if (url.substr(-4) === '.css') {
            return super.resolve('http://cdn.myapp.com/css/', url);
        }
        return super.resolve(baseUrl, url);
    }
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    //provide(UrlResolver, {useClass: MyUrlResolver}),
    provide(RequestOptions, { useClass: BaseOptions }),
    ProjectService,
]);
