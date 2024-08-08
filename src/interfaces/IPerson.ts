import { GeneralPerson } from "src/types/MyTypes";

export interface IPerson {
  age: number,
  name: string,
  getPerson(): GeneralPerson;
}
