System.register(['angular2/core', 'angular2/http', "angular2/http", 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2, Rx;
    var ProjectService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            }],
        execute: function() {
            ProjectService = (function () {
                function ProjectService(http) {
                    this.projectSubject = new Rx.Subject();
                    this.projectsSubject = new Rx.BehaviorSubject([]);
                    this.headers = new http_2.Headers({
                        'Content-Type': 'application/json; charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    this.http = http;
                    this.retrieveAllProjects();
                }
                ProjectService.prototype.onInit = function () {
                    console.log("ProjectService#onInit()");
                };
                ProjectService.prototype.retrieveAllProjects = function () {
                    var _this = this;
                    this.http.get('http://localhost:8080/project/all', { headers: this.headers })
                        .toPromise()
                        .then(function (res) { return _this.projectsSubject.next(res.json()); });
                };
                ProjectService.prototype.retrieveProject = function (uid) {
                    var _this = this;
                    this.http.get("http://localhost:8080/project/find/" + uid, { headers: this.headers })
                        .toPromise()
                        .then(function (res) { return _this.projectSubject.next(res.json()); });
                };
                ProjectService.prototype.getAllProjects = function () {
                    return this.projectsSubject.getValue();
                };
                ProjectService.prototype.getAllProjectsObservable = function () {
                    return this.projectsSubject;
                };
                ProjectService.prototype.getCurrentProjectObservable = function () {
                    return this.projectSubject;
                };
                ProjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProjectService);
                return ProjectService;
            })();
            exports_1("ProjectService", ProjectService);
        }
    }
});
//# sourceMappingURL=project.service.js.map