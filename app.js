// Make a class for Vehicle.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep";
    }

    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// Make a class for a Car which is a type of Vehicle that has four wheels. 
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numwheels = 4;
    }
}

// Make a class for Motorcycle which is a Vehicle that has two wheels and goes VROOM.
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!"
    }
}

// Make a Garage that stores Vehicles and can be added to.
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
   
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, no more room here.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle has been added to the Garage!"
    }
}