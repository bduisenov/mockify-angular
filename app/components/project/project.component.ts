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
import {ProjectService} from "../../services/project.service";
import {OnInit} from "angular2/core";
import {Project} from "../../models/project";
import {ProjectLite} from "../../models/project";
import {OnDestroy} from "angular2/core";
import {Subscription} from "rxjs/Subscription";

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

export class ProjectComponent implements OnInit, OnDestroy {

    private projectSubscription: Subscription;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _projectService: ProjectService) {
    }

    ngOnInit():void {
        this.projectSubscription = this._projectService.getCurrentProjectObservable().subscribe(projects => {

        });
    }

    ngOnDestroy():void {
        this.projectSubscription.unsubscribe();
    }
}
