import Vehicle from "./Vehicle.js";
import Car from "./Car.js";
import Truck from "./Truck.js";

let ford = new Car('Mondeo', '2013', 'sedan', 'black', '280 km/h');
ford.displayInfo();
ford.startEngine();
ford.drive();
ford.transportPeople();

let scania = new Truck('R730', '2013', 'red', '130 km/h');
scania.displayInfo();
scania.startEngine();
scania.drive();
scania.transportContainer();

Vehicle.repair(ford);
new Vehicle().getType(ford);