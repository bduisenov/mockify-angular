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
import {FSM} from "../../../assets/fsm";
import {ProjectWizardWelcomeComponent} from "./steps/project-wizard-welcome.component";
import {ProjectWizardStep2Component} from "./steps/project-wizard-step2.component";
import {ProjectWizardStep3Component} from "./steps/project-wizard-step3.component";
import {ProjectWizardOverviewComponent} from "./steps/project-wizard-overview.component";
import {Mock} from "../../../models/mock";
import {Input} from "angular2/core";

const enum State {
    welcome, basicData, groupsData, overview
}

const enum Condition {
    back
}

@Component({
    selector: 'router-outlet',
    templateUrl: '/app/templates/wizard/project/project-wizard-container.html',
    directives: [
        ROUTER_DIRECTIVES,
    ],
})

@RouteConfig([
    { path: '/',         name: 'ProjectWizardWelcome',  component: ProjectWizardWelcomeComponent, useAsDefault: true },
    { path: '/step2',    name: 'ProjectWizardStep2',    component: ProjectWizardStep2Component    },
    { path: '/step3',    name: 'ProjectWizardStep3',    component: ProjectWizardStep3Component    },
    { path: '/overview', name: 'ProjectWizardOverview', component: ProjectWizardOverviewComponent },
])

export class ProjectWizardComponent {

    mock: Mock = new Mock();

    private mapping: {key: State, value: string}[] = [
        { key: State.welcome,    value: 'ProjectWizardWelcome'  },
        { key: State.basicData,  value: 'ProjectWizardStep2'    },
        { key: State.groupsData, value: 'ProjectWizardStep3'    },
        { key: State.overview,   value: 'ProjectWizardOverview' },
    ];

    private transitions: FSM.Transition<State, Condition>[] = [
        { from: State.welcome,    conditions: [],               to: State.basicData  },
        { from: State.basicData,  conditions: [Condition.back], to: State.welcome    },
        { from: State.basicData,  conditions: [],               to: State.groupsData },
        { from: State.groupsData, conditions: [Condition.back], to: State.basicData  },
        { from: State.groupsData, conditions: [],               to: State.overview   },
        { from: State.overview,   conditions: [Condition.back], to: State.groupsData },
    ];

    private fsm: FSM<State, Condition> = new FSM(State.welcome, this.transitions);

    constructor(
        private _router: Router,
        private _routeParams: RouteParams) {
    }

    onPrev(): void {
        var prevState = this.fsm.apply([Condition.back]).get();
        var prevRoute = this.mapping[prevState].value;
        this._router.navigateByInstruction(this._router.generate([prevRoute]), true);
    }

    onNext(): void {
        var nextState: State = this.fsm.apply([]).get();
        var nextRoute = this.mapping[nextState].value;
        this._router.navigateByInstruction(this._router.generate([nextRoute]), true);
    }

    onCancel(): void {
        this._router.navigate(['Welcome']);
    }

}
