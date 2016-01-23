System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './app.component', './services/project.service', "angular2/compiler"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var browser_1, core_1, router_1, http_1, http_2, app_component_1, project_service_1, compiler_1;
    var BaseOptions, MyUrlResolver;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            },
            function (compiler_1_1) {
                compiler_1 = compiler_1_1;
            }],
        execute: function() {
            BaseOptions = (function (_super) {
                __extends(BaseOptions, _super);
                function BaseOptions() {
                    _super.apply(this, arguments);
                    this.url = 'http://localhost:8080/mock/api/v1/';
                    this.headers = new http_2.Headers({
                        'Content-Type': 'application/json; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                }
                return BaseOptions;
            })(http_1.BaseRequestOptions);
            MyUrlResolver = (function (_super) {
                __extends(MyUrlResolver, _super);
                function MyUrlResolver() {
                    _super.apply(this, arguments);
                }
                MyUrlResolver.prototype.resolve = function (baseUrl, url) {
                    // Serve CSS files from a special CDN.
                    if (url.substr(-4) === '.css') {
                        return _super.prototype.resolve.call(this, 'http://cdn.myapp.com/css/', url);
                    }
                    return _super.prototype.resolve.call(this, baseUrl, url);
                };
                return MyUrlResolver;
            })(compiler_1.UrlResolver);
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                //provide(UrlResolver, {useClass: MyUrlResolver}),
                core_1.provide(http_1.RequestOptions, { useClass: BaseOptions }),
                project_service_1.ProjectService,
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map