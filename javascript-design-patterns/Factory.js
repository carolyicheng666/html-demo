var AbstractVehicleFactory = (function() { //抽象工厂  
  var types = {};

  return {
    getVehicle: function(type, customizations) {
      var Vehicle = types[type];
      return (Vehicle) ? (new Vehicle(customizations)) : null;
    },
    registerVehicle: function(type, Vehicle) {
      var proto = Vehicle.prototype;

      if (proto.drive || proto.breakDown) {
        types[type] = Vehicle;
      }
      return AbstractVehicleFactory;
    }
  }
})();


// car
function Car(options){
  this.doors = options.doors || 4;
  this.state = options.state || 'brand new';
  this.color = options.color || 'silver';
}
Car.prototype.drive= function() {  
  return this.doors;
}
AbstractVehicleFactory.registerVehicle("car", Car);
var car = AbstractVehicleFactory.getVehicle("car", {
  color: 'lime green',
  state: 'like new'
});
console.log(car);


// truck
function Truck(options){
  this.wheelSize = options.wheelSize || 'large';
  this.state = options.state || 'used';
  this.color = options.color || 'blue';
}
Truck.prototype.breakDown= function() {  
  return this.wheelSize;
}
AbstractVehicleFactory.registerVehicle("truck", Truck);
var truck = AbstractVehicleFactory.getVehicle("truck", {
  color: 'neon yellow',
  wheelSize: 'medium'
});
console.log(truck);
