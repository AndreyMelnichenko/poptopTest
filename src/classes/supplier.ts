import { IPerson } from "src/interfaces/IPerson";
import { GeneralPerson } from "src/types/MyTypes";

export class Supplier implements IPerson {
  age: number = 22;
  name: string = "Volodymyr";

  getPerson(): GeneralPerson {
    return {
      age: this.age,
      name: this.name,
    };
  }

}
