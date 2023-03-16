//   Lesson Companion (js-5-classes-properties-and-methods)   //


// Exercise 4: Creating a Class
class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let banana = new Fruit("banana", "yellow");
console.log(banana);


// Exercise 6: Creating a Class 
class TV{
    constuctor(size, brand) {
        this.size = size
        this.brand = brand
  }}
  
  let myTV = new TV("big", "Sony")
  console.log(myTV)


// Exercise 5: Creating a Class
class Elevator {
    constructor() {
        this.floor = 1;
    }
    
    goUp(floor) {
        floor += 1;
        console.log(
            "Going up to floor " + floor
        );
    }

    goDown(floor) {
        floor -= 1;
        console.log(
            "Going up to floor " + floor
        );
    }
}

let elevator = new Elevator();
elevator.goUp();
elevator.goUp();
elevator.goDown();
console.log(elevator);








