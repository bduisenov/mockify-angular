import {
    Component,
    View,
    OnInit
} from 'angular2/core';
import {Router}            from "angular2/router";
import {ProjectService}    from "app/services/project.service";
import {ProjectLite}       from "app/models/project";

@Component({
    selector: 'header',
})

@View({
    templateUrl: '/app/templates/header.html',
    styles: [`
        .menu { background-color: #4285f4; color: #fff; border-radius: 0; }
        .menu .item { color: #fff; }
    `],
})

export class HeaderComponent implements OnInit {
    defaultTitle = 'Project';
    title;
    projects: ProjectLite[];

    constructor(
        private _router: Router,
        private _projectService: ProjectService) {
        _projectService.getAllProjectsObservable().subscribe((projects) => {
            this.projects = projects;
        });
    }

    ngOnInit() {
        $(".menu .dropdown").dropdown();
    }

    onProjectCreation() {
        this.title = 'Project creation';
        this._router.navigate( ['ProjectWizard'] )
    }

    onProjectSelection(uid: string) {
        var selectedProject: ProjectLite = this.projects.filter(p => { return p.uid === uid; })[0];
        this.title = selectedProject.title;
        this._projectService.getAllProjects();
        //this._router.navigate( ['HeroDetail', { id: hero.id }] )
    }

    onFilter(val: string) {
        if (val) {
            let matched = ((val: string) => (source: string) =>
                source.toLowerCase().indexOf(val.toLowerCase()) > -1)(val);
            this.projects = this._projectService.getAllProjects().filter(p => matched(p.uid) || matched(p.title) );
        } else {
            this.projects = this._projectService.getAllProjects();
        }
    }

}
