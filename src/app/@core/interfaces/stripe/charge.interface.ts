export interface ICharge {
  id: string;
  card: string;
  paid: boolean;
  customer: string;
  created: number;
  amount: number;
  status: string;
  typeOrder: string;
  receiptUrl: string;
  receiptEmail: string;
}
