import Vehicle from "./Vehicle.js";

class Truck extends Vehicle {
    constructor(carModel, carYear, carColor, maxSpeed) {
        super(carModel, carYear, carColor, maxSpeed);
        this.type = 'truck';
    }

    startEngine() {
        this.engineIsStarted = true;
        console.log('The engine is started.');
    }

    transportContainer() {
        console.log('I am starting transporting heavy container');
    }

}

export default Truck;