import { Injectable } from '@angular/core';
import { product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
    products: product[] = [];

  constructor() { }

  //serviço que retorna um array de produtos.
  getProducts(): product[] {
    return this.products;
  }

  //serviço que salva um produto.
  saveProduct(product: product){
    product.id = this.products.length + 1;
    this.products.push(product);
  }
}
