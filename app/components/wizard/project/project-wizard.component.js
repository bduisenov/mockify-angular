System.register(["angular2/core", "angular2/router", "../../../assets/fsm", "./steps/project-wizard-welcome.component", "./steps/project-wizard-step2.component", "./steps/project-wizard-step3.component", "./steps/project-wizard-overview.component", "../../../models/mock"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, fsm_1, project_wizard_welcome_component_1, project_wizard_step2_component_1, project_wizard_step3_component_1, project_wizard_overview_component_1, mock_1;
    var ProjectWizardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (fsm_1_1) {
                fsm_1 = fsm_1_1;
            },
            function (project_wizard_welcome_component_1_1) {
                project_wizard_welcome_component_1 = project_wizard_welcome_component_1_1;
            },
            function (project_wizard_step2_component_1_1) {
                project_wizard_step2_component_1 = project_wizard_step2_component_1_1;
            },
            function (project_wizard_step3_component_1_1) {
                project_wizard_step3_component_1 = project_wizard_step3_component_1_1;
            },
            function (project_wizard_overview_component_1_1) {
                project_wizard_overview_component_1 = project_wizard_overview_component_1_1;
            },
            function (mock_1_1) {
                mock_1 = mock_1_1;
            }],
        execute: function() {
            ProjectWizardComponent = (function () {
                function ProjectWizardComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.mock = new mock_1.Mock();
                    this.mapping = [
                        { key: 0 /* welcome */, value: 'ProjectWizardWelcome' },
                        { key: 1 /* basicData */, value: 'ProjectWizardStep2' },
                        { key: 2 /* groupsData */, value: 'ProjectWizardStep3' },
                        { key: 3 /* overview */, value: 'ProjectWizardOverview' },
                    ];
                    this.transitions = [
                        { from: 0 /* welcome */, conditions: [], to: 1 /* basicData */ },
                        { from: 1 /* basicData */, conditions: [0 /* back */], to: 0 /* welcome */ },
                        { from: 1 /* basicData */, conditions: [], to: 2 /* groupsData */ },
                        { from: 2 /* groupsData */, conditions: [0 /* back */], to: 1 /* basicData */ },
                        { from: 2 /* groupsData */, conditions: [], to: 3 /* overview */ },
                        { from: 3 /* overview */, conditions: [0 /* back */], to: 2 /* groupsData */ },
                    ];
                    this.fsm = new fsm_1.FSM(0 /* welcome */, this.transitions);
                }
                ProjectWizardComponent.prototype.onPrev = function () {
                    var prevState = this.fsm.apply([0 /* back */]).get();
                    var prevRoute = this.mapping[prevState].value;
                    this._router.navigateByInstruction(this._router.generate([prevRoute]), true);
                };
                ProjectWizardComponent.prototype.onNext = function () {
                    var nextState = this.fsm.apply([]).get();
                    var nextRoute = this.mapping[nextState].value;
                    this._router.navigateByInstruction(this._router.generate([nextRoute]), true);
                };
                ProjectWizardComponent.prototype.onCancel = function () {
                    this._router.navigate(['Welcome']);
                };
                ProjectWizardComponent = __decorate([
                    core_1.Component({
                        selector: 'router-outlet',
                        templateUrl: '/app/templates/wizard/project/project-wizard-container.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                        ],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'ProjectWizardWelcome', component: project_wizard_welcome_component_1.ProjectWizardWelcomeComponent, useAsDefault: true },
                        { path: '/step2', name: 'ProjectWizardStep2', component: project_wizard_step2_component_1.ProjectWizardStep2Component },
                        { path: '/step3', name: 'ProjectWizardStep3', component: project_wizard_step3_component_1.ProjectWizardStep3Component },
                        { path: '/overview', name: 'ProjectWizardOverview', component: project_wizard_overview_component_1.ProjectWizardOverviewComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], ProjectWizardComponent);
                return ProjectWizardComponent;
            })();
            exports_1("ProjectWizardComponent", ProjectWizardComponent);
        }
    }
});
//# sourceMappingURL=project-wizard.component.js.map