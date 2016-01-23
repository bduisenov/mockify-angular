System.register(['angular2/core', './components/header.component', "angular2/router", "./components/wizard/project/project-wizard.component", "./components/welcome.component", "./components/project/project.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, router_1, router_2, project_wizard_component_1, welcome_component_1, project_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (project_wizard_component_1_1) {
                project_wizard_component_1 = project_wizard_component_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (project_component_1_1) {
                project_component_1 = project_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mockify-app',
                        directives: [
                            router_2.ROUTER_DIRECTIVES,
                            header_component_1.HeaderComponent
                        ],
                        templateUrl: '/app/templates/app.html',
                        styles: ["\n\n    "],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/new/project/...', name: 'ProjectWizard', component: project_wizard_component_1.ProjectWizardComponent },
                        { path: '/project/:uid/...', name: 'Project', component: project_component_1.ProjectComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map