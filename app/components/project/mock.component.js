System.register(['angular2/core', "angular2/router", "../../services/mock.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mock_service_1;
    var MockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mock_service_1_1) {
                mock_service_1 = mock_service_1_1;
            }],
        execute: function() {
            MockComponent = (function () {
                function MockComponent(_router, _routeParams, _mockService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._mockService = _mockService;
                }
                // We put the data access logic in the ngOnInit method rather
                // than inside the constructor to improve the component's testability
                MockComponent.prototype.ngOnInit = function () {
                    var uid = this._routeParams.get('uid');
                    console.log("recieved " + uid + " as uid");
                };
                MockComponent = __decorate([
                    core_1.Component({
                        selector: 'router-outlet',
                        templateUrl: '/app/templates/project/mock-detail.html',
                        providers: [mock_service_1.MockService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, mock_service_1.MockService])
                ], MockComponent);
                return MockComponent;
            })();
            exports_1("MockComponent", MockComponent);
        }
    }
});
//# sourceMappingURL=mock.component.js.map