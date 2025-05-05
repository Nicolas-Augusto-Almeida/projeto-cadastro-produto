import { Category } from "./category";

export interface product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    promotion: boolean;
    newProduct: boolean;
}