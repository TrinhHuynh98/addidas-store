export interface AppInitialState {
  toast: string[];
  userInfo: undefined | { email: string };
  isLoading: boolean;
}

export interface genericProductType {
  _id: number;
  title: string;
  isNew: boolean;
  oldPrice: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

export interface ProductInitialState {
  allProducts: undefined | genericProductType[];
  currentProduct: undefined | genericProductType;
}
