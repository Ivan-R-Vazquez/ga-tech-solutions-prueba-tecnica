export interface Product {
  id: string;
  img_url: string;
  item_name: string;
  short_description: string;
  quantity: number;
  price_without_tax: number;
  tax: number;
  shipping_fee: number;
}
