import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';
import { product } from '../../interfaces/Product';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  //Criar um array categories(objetos) usando a interface(category) que vai ser utilzado pelo componente filho: form;
  //Para importar o array categories no componente filho, é necessário usar o decorator @Input() no componente filho.
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
    
    product : product = {} as product;
    
    products: product[] = [];

    //metodo para salvar o produto;
    saveProduct() {
      this.product.id = this.products.length + 1;
      this.products.push(this.product);
      this.product = {} as product;

      console.log('salvo');
    }

}
