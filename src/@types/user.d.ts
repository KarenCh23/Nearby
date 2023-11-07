export interface user {
  lastname: string;
  firstname: string;
  email: string;
  phone: string | null;
  password: string;
  description: string | null;
  role: [string];
  picture: string | null;
  house_number: string;
  street: string | null;
  postal_code: string;
  region: string;
  country: string | null;
  siren: string | null;
  city: string | null;
}
