import { BaseCar } from "./baseCar";
import { CarType } from "../types/MyTypes";
import { GeneralPerson, Person } from "./person";

export class Car extends BaseCar {
  private name;
  private cars: CarType[] = [
    {
      name: "Audi",
      speed: 180,
    },
    {
      name: "Audi",
      speed: 280,
    },
    {
      name: "BMW",
      speed: 200,
    },
  ];

  constructor(newBrand: string = "Audi"){
    super(newBrand);
    this.name = newBrand;
    // console.log(">>>>>>>>>>>> "+ this.engine +" <<<<<<<<<<<<<<<<<");
    // console.log("protected variable" + this.baseModel);
  }

  getCar(): CarType {
    const filteredCar: CarType[] = [];
    this.cars.forEach(el => {
      if(el.name === this.name) {
        filteredCar.push(el);
      }
    });
    if(filteredCar.length === 0) {
      return {
        name: this.name,
        speed: 0,
      };
    }
    
    return filteredCar[0];
  }

  getPassenger(): GeneralPerson {
    //const person = new Person().getDefaultPerson();
    return new Person().getDefaultPerson();
  }

  getPassenger2(): void {
    //const person = new Person().getDefaultPerson();
    new Person().getDefaultPerson();
  }

}

