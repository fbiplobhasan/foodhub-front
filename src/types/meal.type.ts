export interface IMeal {
  id?: string;           
  name: string;
  description: string;
  price: number;
  image: string;             
  dietaryType: "VEG" | "NON_VEG"; 
  categoryId: string;
  providerId: string;
  createdAt?: string | Date; 
  category: {
    id?: string;             
    name: string;
  };
  provider?: {               
    id: string;
    userId: string;
    storeName: string;
    description: string;
    address: string;
  };
}