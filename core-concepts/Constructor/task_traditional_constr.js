var Task = function(name) {
    this.name = name;
    this.completed = false;
    
    this.complete = function() {
     this.completed = true;   
    }
    
    this.save = function() {
        console.log('saving Task', this.name);
    }
}

var task1 = new Task("constructors");
var task2 = new Task("modules");
var task3 = new Task("singletons");
var task4 = new Task("prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();