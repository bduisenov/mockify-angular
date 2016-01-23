System.register([], function(exports_1) {
    var FSM;
    return {
        setters:[],
        execute: function() {
            FSM = (function () {
                function FSM(start, transitions) {
                    this.start = start;
                    this.transitions = transitions;
                    this.initialState = start;
                    this.current = start;
                }
                FSM.prototype.reset = function () {
                    this.current = this.initialState;
                    return this;
                };
                FSM.prototype.get = function () {
                    return this.current;
                };
                FSM.prototype.apply = function (conditions) {
                    var nextState = this.getNextState(conditions);
                    if (nextState != null) {
                        this.current = nextState;
                    }
                    return this;
                };
                FSM.prototype.getNextState = function (conditions) {
                    for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
                        var transition = _a[_i];
                        var currentStateMatches = transition.from === this.current;
                        var conditionsMatch = transition.conditions.toString() === conditions.toString();
                        if (currentStateMatches && conditionsMatch) {
                            return transition.to;
                        }
                    }
                    return null;
                };
                return FSM;
            })();
            exports_1("FSM", FSM);
        }
    }
});
//# sourceMappingURL=fsm.js.map