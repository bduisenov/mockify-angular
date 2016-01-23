import {Component} from "angular2/core";
import {
    ROUTER_DIRECTIVES,
    RouteParams,
    Router,
    RouteConfig
} from "angular2/router";
import {ProjectService} from "../services/project.service";
import {ProjectLite} from "../models/project";

@Component({
    templateUrl: '/app/templates/welcome.html',
})

export class WelcomeComponent {

    private projects: ProjectLite[];

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _projectService: ProjectService) {
        _projectService.getAllProjectsObservable().subscribe((projects) => {
            this.projects = projects;
        });
    }

    onSelect(uid: string): void {
        this._router.navigate(['Project', {uid: uid}]);
    }

    onCreate(): void {
        this._router.navigate(['ProjectWizard']);
    }

}
