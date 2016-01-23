import {
    Component,
    View
} from "angular2/core";
import {Mock} from "../../../../models/mock";
import OnInit = ng.OnInit;

@Component({
    selector: 'router-outlet',
    inputs: ['mock'],
})

@View({
    templateUrl: 'app/templates/wizard/project/steps/project-wizard-welcome.html',
})

export class ProjectWizardWelcomeComponent implements OnInit {

    mock: Mock;

    constructor() {
        console.log(this.mock);
    }

    onInit() {
        console.log(this.mock);
    }

}
