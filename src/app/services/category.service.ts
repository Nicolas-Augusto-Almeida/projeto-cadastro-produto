import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories : Category[] = [
    {
      id: 1,
      name: 'Produção própria'
    },
    {
      id: 2,
      name: 'Nacional'
    },
    {
      id: 3,
      name: 'Importado'
    },
    {
      id: 4,
      name: 'Premium'
    },
  ];

  constructor() { }

  getCategories() : Category[]{
    return this.categories;
  }

}
