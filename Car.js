import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
    constructor(carModel, carYear, bodyType, carColor, maxSpeed) {
        super(carModel, carYear, carColor, maxSpeed);
        this.bodyType = bodyType;
        this.type = 'car';
    }

    displayInfo() {
        console.log(`General information:
        Model: ${this.model};
        Year: ${this.year};
        Body type: ${this.bodyType};
        Color: ${this.color};
        Max Speed: ${this.speed};`);
    }

    startEngine() {
        this.engineIsStarted = true;
        console.log('The engine is started.');
    }

    transportPeople() {
        if (this.engineIsStarted) {
            console.log('I am starting transporting passengers');
        } else {
            console.log('Start driving first.');
        }

    }
}

export default Car;