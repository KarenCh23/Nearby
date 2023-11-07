export interface Products {
  id: number;
  name: string;
  description: string;
  picture: string;
  price: number | string;
  weight: number | string;
  user: {
    picture: string;
    lastname: string;
    firstname: string;
    region: string;
  };
}

export interface productData {
  id: number;
  name: string;
  description: string;
  price: string;
  weight: string;
  picture: string;
  category: formatedCategory[];
}
