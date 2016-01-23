System.register(['angular2/core', "angular2/router", "app/services/project.service"], function(exports_1) {
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
    var HeaderComponent;
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
            HeaderComponent = (function () {
                function HeaderComponent(_router, _projectService) {
                    var _this = this;
                    this._router = _router;
                    this._projectService = _projectService;
                    this.defaultTitle = 'Project';
                    _projectService.getAllProjectsObservable().subscribe(function (projects) {
                        _this.projects = projects;
                    });
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    $(".menu .dropdown").dropdown();
                };
                HeaderComponent.prototype.onProjectCreation = function () {
                    this.title = 'Project creation';
                    this._router.navigate(['ProjectWizard']);
                };
                HeaderComponent.prototype.onProjectSelection = function (uid) {
                    var selectedProject = this.projects.filter(function (p) { return p.uid === uid; })[0];
                    this.title = selectedProject.title;
                    this._projectService.getAllProjects();
                    //this._router.navigate( ['HeroDetail', { id: hero.id }] )
                };
                HeaderComponent.prototype.onFilter = function (val) {
                    if (val) {
                        var matched = (function (val) { return function (source) {
                            return source.toLowerCase().indexOf(val.toLowerCase()) > -1;
                        }; })(val);
                        this.projects = this._projectService.getAllProjects().filter(function (p) { return matched(p.uid) || matched(p.title); });
                    }
                    else {
                        this.projects = this._projectService.getAllProjects();
                    }
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                    }),
                    core_1.View({
                        templateUrl: '/app/templates/header.html',
                        styles: ["\n        .menu { background-color: #4285f4; color: #fff; border-radius: 0; }\n        .menu .item { color: #fff; }\n    "],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof project_service_1.ProjectService !== 'undefined' && project_service_1.ProjectService) === 'function' && _a) || Object])
                ], HeaderComponent);
                return HeaderComponent;
                var _a;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map