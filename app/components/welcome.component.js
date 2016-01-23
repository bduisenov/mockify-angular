System.register(["angular2/core", "angular2/router", "../services/project.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, project_service_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent(_router, _routeParams, _projectService) {
                    var _this = this;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._projectService = _projectService;
                    _projectService.getAllProjectsObservable().subscribe(function (projects) {
                        _this.projects = projects;
                    });
                }
                WelcomeComponent.prototype.onSelect = function (uid) {
                    this._router.navigate(['Project', { uid: uid }]);
                };
                WelcomeComponent.prototype.onCreate = function () {
                    this._router.navigate(['ProjectWizard']);
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/templates/welcome.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, project_service_1.ProjectService])
                ], WelcomeComponent);
                return WelcomeComponent;
            })();
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map