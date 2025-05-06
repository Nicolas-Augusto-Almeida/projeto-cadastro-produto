import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';
import { product } from '../../interfaces/Product';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  
  product: product = {} as product;
  products: product[] = [];
  categories: Category[] = [];
  FormGroupProduct: FormGroup;
  showform: boolean = false;
  
  constructor(private categoryService: CategoryService, private productService: ProductService, private formBuilder: FormBuilder) 
  { 
    this.FormGroupProduct = this.formBuilder.group({
    id: [''],
    name: [''],
    description: [''],
    price: [''],
    categoryId: [''],
    promotion: [''],
    newproduct: ['']
  });
}

  isediting: boolean = false;

  ngOnInit() {
    this.loadProducts();
    this.loadCategories();
  }
  
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: data => {this.products = data}
    })
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: data => {this.categories = data}
    })
  }
  saveProduct() {
    this.productService.save(this.product).subscribe({
      next: data => {
        this.products.push(data);
        this.product = {} as product;
      }
    });
  }
  updateProduct(product:product) {
      this.product = product;
      this.isediting = true;
    }
  
    deleteProduct(product: product){
    this.productService.delete(product).subscribe(
      {
        next: () => this.loadProducts()
      }
    )
  }  
}
