export interface ProductType {
  readonly id: number;
  readonly name: string;
  readonly price: number;
  readonly photoUrl: string;
}

export interface StatusType {
  readonly id: number;
  readonly name: string;
}

export interface OrderType {
  readonly id: number;
  readonly productId: number;
  readonly statusId: number;
  readonly count: number;
}
