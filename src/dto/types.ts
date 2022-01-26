export interface ProductType {
  id: number;
  name: string;
  price: number;
  photoUrl: string;
}

export interface StatusType {
  id: number;
  name: string;
}

export interface OrderType {
  id: number;
  productId: number;
  statusId: number;
  count: number;
}

export interface NewOrderType {
  productId: number;
  count: number;
}
