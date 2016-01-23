import {Component}           from 'angular2/core';
import {Router, RouteParams} from "angular2/router";

import {OnInit} from "angular2/core";
import {MockService} from "../../services/mock.service";

@Component({
    selector: 'router-outlet',
    templateUrl: '/app/templates/project/mock-detail.html',
    providers: [MockService]
})

export class MockComponent implements OnInit {

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _mockService: MockService) { }


    // We put the data access logic in the ngOnInit method rather
    // than inside the constructor to improve the component's testability
    ngOnInit() {
        let uid = this._routeParams.get('uid');
        console.log(`recieved ${uid} as uid`);
    }
}
