export interface IPayment {
  amount: number | string;
  description: string;
  customer: string;
  token?: string;
  currency?: string;
}
