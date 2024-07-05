function create_car(manufacturer, model_name) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model_name: model_name };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("Toyota", "Corrolla");
console.log(my_car);
var my_car2 = create_car("Toyota", "Corrolla", "color: black", "year : 2022");
console.log(my_car2);
