export interface CalculateData {
  amount: number;
  installments: number;
  mdr: number;
  days?: Array<number>;
}

export interface IResult {
  [key: string]: number;
}
