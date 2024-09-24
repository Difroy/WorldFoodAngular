import { Component, Input } from '@angular/core';
import { Product } from '../model/Product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent 
{

    @Input()
    product!:Product;

    fullview:boolean = false;

    imagePath():string
    {
        return 'assets/images/'+this.product.image;

    }

    toggleDetail():void
    {
        this.fullview = !this.fullview;
    }

    calories():number 
    {
        return this.product.carbs * 3 + this.product.proteins * 3 + this.product.fats * 9;
    }
      

}