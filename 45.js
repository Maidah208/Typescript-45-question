"use strict";
function car_info(manufacturer, model_name, ...options) {
    let car_information = {
        'manufacturer_name': manufacturer,
        'model_name': model_name,
    };
    for (let option of options) {
        Object.assign(car_information, { [option[0]]: option[1] });
    }
    return car_information;
}
let myCar = car_info("Toyota", "Corolla", ["color", "blue"], ["year", 2023], ['age', 13]);
console.log(myCar);
