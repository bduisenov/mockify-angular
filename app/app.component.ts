import {Component} from 'angular2/core';
import {HeaderComponent} from './components/header.component';
import {MockComponent} from "./components/mock.component";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ProjectWizardComponent} from "./components/wizard/project/project-wizard.component";
import {WelcomeComponent} from "./components/welcome.component";
import {FSM} from "./assets/fsm";
import {AuxRoute} from "angular2/router";
import {ProjectComponent} from "./components/project/project.component";

@Component({
    selector: 'mockify-app',
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent
    ],
    templateUrl: '/app/templates/app.html',
    styles: [`

    `],
})

@RouteConfig([
    { path: '/',                name: 'Welcome',       component: WelcomeComponent, useAsDefault: true },
    { path: '/new/project/...', name: 'ProjectWizard', component: ProjectWizardComponent },
    { path: '/project/:uid/...',name: 'Project',       component: ProjectComponent },
    //{ path: '/mock/:uid',       name: 'MockDetail',    component: MockComponent },
])

export class AppComponent {

    public title = 'Tour of Heroes';

}
