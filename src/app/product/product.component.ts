import { Component } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent 
{
  id:1, name:'Arepa', carbs:70, proteins:6, fats:2, price:3, vegan:true, description: 'Arepa venezuelana', ingredients: 'Mais, acqua, sale', image: 'arepa.jpeg';


}
