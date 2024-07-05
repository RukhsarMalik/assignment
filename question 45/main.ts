function create_car(manufacturer: string, model_name : string, ... options){
    let car= { manufacturer : manufacturer, model_name: model_name}
    options.forEach(option => {
        let [key , value ] = option.split(":")
        car[key.trim()] = value.trim()
    })
 return car;
}

let my_car = create_car("Toyota", "Corrolla")
console.log(my_car)


let  my_car2 = create_car("Toyota", "Corrolla", "color: black", "year : 2022")
 console.log(my_car2)