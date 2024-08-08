import { GeneralPerson, FinancialPerson } from "../types/MyTypes";

export class Person {
  private personName: string = "Default name";
  private personAge: number = -1;
  private lastName: string;

  constructor(pName?: string, pAge?: number){
    if(pName){
      this.personName = pName;
    }
    if(pAge){
      this.personAge = pAge;
    }
  }

  public createPerson(person: GeneralPerson, revenue: number): FinancialPerson {
    return {
      name: person.name,
      revenue: revenue,
    };
  }

  private getPerson(): GeneralPerson {
    return {
      name: this.personName,
      age: this.personAge,
    };
  }

  public getDefaultPerson(pName = this.personName, pAge = this.personAge): GeneralPerson {
    if(pName === "Default name"){
      this.personName = "Andrii";
    } else {
      this.personName = pName;
    }
    if(pAge === -1){
      this.personAge = 38;
    } else {
      this.personAge = pAge;
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
export { GeneralPerson };

