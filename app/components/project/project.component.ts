import {
    Component,
    View
} from "angular2/core";
import {
    ROUTER_DIRECTIVES,
    RouteParams,
    Router,
    RouteConfig
} from "angular2/router";
import {Input} from "angular2/core";
import {OverviewComponent} from "./overview.component";
import {MockComponent} from "./mock.component";

@Component({
    selector: 'router-outlet',
    templateUrl: '/app/templates/project/project.html',
    directives: [
        ROUTER_DIRECTIVES,
    ],
})

@RouteConfig([
    { path: '/',          name: 'Overview',   component: OverviewComponent, useAsDefault: true },
    { path: '/mock/:uid', name: 'MockDetail', component: MockComponent }
])

export class ProjectComponent {

    constructor(
        private _router: Router,
        private _routeParams: RouteParams) {
    }

}
