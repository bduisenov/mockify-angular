import {
    Component,
    View
} from "angular2/core";
import OnInit = ng.OnInit;

@Component({
    selector: 'router-outlet',
})

@View({
    templateUrl: 'app/templates/project/overview.html',
})

export class OverviewComponent {

    constructor() {
    }

}
