// only for inheritance

abstract class Project {
    projectName: string = 'Default Project';
    budget: number = 1000;

    // this has to be implemented in the child class
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ConstructionProject extends Project {
    changeName(name: string) : void {
        this.projectName = name;
    }
}

let newProject = new ConstructionProject();
console.log(newProject.projectName);
newProject.changeName('Sports Center');
console.log(newProject.projectName, newProject.budget);
