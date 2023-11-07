export interface Producer {
  id: number;
  picture: string;
  lastname: string;
  firstname: string;
  region: string;
  city: string;
  description: string;
}

export interface ProducerSlider {
  id: number;
  picture: string;
  lastname: string;
  firstname: string;
  region: string;
  product: Array<{
    id: number;
    name: string;
    picture: string;
    description: string;
    price: string;
  }>;
}

export interface MakerProduct {
  id: number | null;
  name: string;
  picture: string;
  price: number;
  weight: number;
  description: string;
  category: [];
}
