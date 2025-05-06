import { Injectable } from '@angular/core';
import { product } from '../interfaces/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
    products: product[] = [];
    apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  //serviço que retorna um array de produtos.
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  //serviço que salva um produto.
  save(product: product){
    return this.http.post<product>('http://localhost:3000/products', product);
  }
  delete(product: product): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${product.id}`,);
  }
  update(product: product){
    return this.http.put<product>('http://localhost:3000/products/${product.id}', product);
  }
}
