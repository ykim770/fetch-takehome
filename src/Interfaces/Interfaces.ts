export interface IData {
  occupations: string[];
  states: IState[];
}
export interface IState {
  name: string;
  abbreviation: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  occupation: string;
  state: string;
}
