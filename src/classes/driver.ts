import { IPerson } from "src/interfaces/IPerson";
import { Person } from "./person";
import { GeneralPerson } from "src/types/MyTypes";

export class Driver extends Person implements IPerson {
  override getPerson(): GeneralPerson {
    return new Person("Andrii Driver", 38);
  }

  getDriver(): GeneralPerson {
    return this.getPerson();
  }
}
