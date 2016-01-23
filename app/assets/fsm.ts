
import Transition = FSM.Transition;

export class FSM<State, Condition> {
    private initialState: State;
    private current: State;

    constructor(private start: State, private transitions: Transition<State, Condition>[]) {
        this.initialState = start;
        this.current = start;
    }

    reset(): FSM<State, Condition> {
        this.current = this.initialState;
        return this;
    }

    get() {
        return this.current;
    }

    apply(conditions: Condition[]): FSM<State, Condition> {
        var nextState: State = this.getNextState(conditions);
        if (nextState != null) {
            this.current = nextState;
        }
        return this;
    }

    getNextState(conditions: Condition[]): State {
        for (var transition of this.transitions) {
            var currentStateMatches = transition.from === this.current;
            var conditionsMatch = transition.conditions.toString() === conditions.toString();
            if (currentStateMatches && conditionsMatch) {
                return transition.to;
            }
        }
        return null;
    }

}

export module FSM {

    export interface Transition<State, Condition> {
        from: State;
        conditions: Condition[];
        to: State;
    }

}
