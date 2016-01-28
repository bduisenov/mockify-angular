System.register(["angular2/core", "angular2/router", "./overview.component", "./mock.component", "../../services/project.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, overview_component_1, mock_component_1, project_service_1;
    var ProjectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (overview_component_1_1) {
                overview_component_1 = overview_component_1_1;
            },
            function (mock_component_1_1) {
                mock_component_1 = mock_component_1_1;
            },
            function (project_service_1_1) {
                project_service_1 = project_service_1_1;
            }],
        execute: function() {
            ProjectComponent = (function () {
                function ProjectComponent(_router, _routeParams, _projectService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._projectService = _projectService;
                }
                ProjectComponent.prototype.ngOnInit = function () {
                    this.projectSubscription = this._projectService.getCurrentProjectObservable().subscribe(function (projects) {
                    });
                };
                ProjectComponent.prototype.ngOnDestroy = function () {
                    this.projectSubscription.unsubscribe();
                };
                ProjectComponent = __decorate([
                    core_1.Component({
                        selector: 'router-outlet',
                        templateUrl: '/app/templates/project/project.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                        ],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Overview', component: overview_component_1.OverviewComponent, useAsDefault: true },
                        { path: '/mock/:uid', name: 'MockDetail', component: mock_component_1.MockComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, project_service_1.ProjectService])
                ], ProjectComponent);
                return ProjectComponent;
            })();
            exports_1("ProjectComponent", ProjectComponent);
        }
    }
});
//# sourceMappingURL=project.component.js.map