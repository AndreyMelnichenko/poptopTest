export type GeneralPerson = {
  name: string;
  age: number;
}

export type ContactPerson = {
  phoneNumber: number;
  secondNumber: number;
  email: string;
}

export type FinancialPerson = Omit<GeneralPerson, "age"> & {
  revenue: number
}

export type FamilyPerson = {
  isMarried: boolean;
  isHaveChildren: boolean;
  address: string;
}

export type PersonFull = GeneralPerson & ContactPerson & FinancialPerson & FamilyPerson;

export type CarType = {
  name: string,
  speed: number,
}


