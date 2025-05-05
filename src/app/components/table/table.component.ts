import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  
  //Criar um array categories(objetos) usando a interface(category) que vai ser utilzado pelo componente filho: form;
  //Para importar o array categories no componente filho, é necessário usar o decorator @Input() no componente filho.
  categories : Category[] = [];

    product : product = {} as product;
    products: product[] = [];

    //puxa o service se for @injectable
    constructor(private categoryService: CategoryService, private productService:ProductService ) {}


    //metodo que vai ser chamado quando o componente for inicializado para retornar o array de categorias e produtos.
    ngOnInit(): void{
      this.categories = this.categoryService.getCategories();
      this.products = this.productService.getProducts();
    }

    //metodo para salvar o produto;
    saveProduct() {
      this.productService.saveProduct(this.product);
      this.product = {} as product;
    }

}
