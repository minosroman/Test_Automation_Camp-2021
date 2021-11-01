class Vehicle {

    constructor(carModel, carYear, carColor, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.color = carColor;
        this.speed = maxSpeed;
        this.engineIsStarted = false;
    }

    displayInfo() {
        console.log(`General information:
        Model: ${this.model};
        Year: ${this.year};
        Color: ${this.color};
        Max Speed: ${this.speed};
        Type: ${this.type}`);
    }

    drive() {
        if (this.engineIsStarted) {
            console.log('You can drive.');
        } else {
            console.log('Start engine first.');
        }
    }

    static repair(car) {
        console.log(`The ${car.model} is old and needs repair.`);
    }

    getType(car) {
        console.log(`Type of "${car.model}" is "${car.type}".`);
    }

}

export default Vehicle;