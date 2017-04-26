// only for inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Project = (function () {
    function Project() {
        this.projectName = 'Default Project';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ConstructionProject = (function (_super) {
    __extends(ConstructionProject, _super);
    function ConstructionProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConstructionProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ConstructionProject;
}(Project));
var newProject = new ConstructionProject();
console.log(newProject.projectName);
newProject.changeName('Sports Center');
console.log(newProject.projectName, newProject.budget);
