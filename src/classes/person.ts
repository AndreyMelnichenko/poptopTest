import { IPerson } from "src/interfaces/IPerson";
import { GeneralPerson, FinancialPerson } from "../types/MyTypes";

export class Person implements IPerson {
  public name: string = "Default name";
  public age: number = -1;
  private lastName: string;

  constructor(pName?: string, pAge?: number){
    if(pName){
      this.name = pName;
    }
    if(pAge){
      this.age = pAge;
    }
  }

  public createPerson(person: GeneralPerson, revenue: number): FinancialPerson {
    return {
      name: person.name,
      revenue: revenue,
    };
  }

  public getPerson(): GeneralPerson {
    return {
      name: this.name,
      age: this.age,
    };
  }

  public getDefaultPerson(pName = this.name, pAge = this.age): GeneralPerson {
    if(pName === "Default name"){
      this.name = "Andrii";
    } else {
      this.name = pName;
    }
    if(pAge === -1){
      this.age = 38;
    } else {
      this.age = pAge;
    }
    return this.getPerson();
  }

  private getRandomStr(length: number): string {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}
