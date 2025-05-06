import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Category } from '../../interfaces/category';
import { product } from '../../interfaces/Product';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  
  //import do array categories do componente pai: table. utilizando @input.
  @Input()
   categories : Category[] = []
  //adicionar no componente pai: table - <app-form [categories]="categories"></app-form>

  //Criar um objeto product usando a interface(product).
  @Input()
  product : product = {} as product;
  //Fazer o two-way data binding no input do html, utilizando [(ngModel)]="product.name".
  //colocar o product no componente pai.

  //Output para emitir o evento de salvar o produto.
  @Output()
  saveEmitter = new EventEmitter();
  
  save() {
    this.saveEmitter.emit();
    }
  cancel() {
    this.product = {} as product;

  }  

    selectCategory(category1: Category, category2: Category) {
      return category1 && category2 ? category1.id === category2.id : false;
    }
}
