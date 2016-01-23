import {Injectable} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import { Inject } from 'angular2/core';
import {Project, ProjectLite} from "../models/project";
import {Headers} from "angular2/http";
import * as Rx from 'rxjs/Rx';
import OnInit = ng.OnInit;

@Injectable()
export class ProjectService implements OnInit {

    http: Http;

    private projectSubject = new Rx.Subject<Project>();
    private projectsSubject = new Rx.BehaviorSubject<ProjectLite[]>([]);

    headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });

    constructor(http: Http) {
        this.http = http;
        this.retrieveAllProjects();
    }

    onInit():void {
        console.log("ProjectService#onInit()");
    }

    retrieveAllProjects(): void {
        this.http.get('http://localhost:8080/project/all', { headers: this.headers })
            .toPromise()
            .then(res => this.projectsSubject.next(res.json()));
    }

    retrieveProject(uid: string): void {
        this.http.get(`http://localhost:8080/project/find/${uid}`, { headers: this.headers })
            .toPromise()
            .then(res => this.projectSubject.next(res.json()));
    }

    getAllProjects(): ProjectLite[] {
        return this.projectsSubject.getValue();
    }

    getAllProjectsObservable(): Rx.Observable<ProjectLite[]> {
        return this.projectsSubject;
    }

    getCurrentProjectObservable(): Rx.Observable<Project> {
        return this.projectSubject;
    }

}
