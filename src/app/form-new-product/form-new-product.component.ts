import { Component } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-form-new-product',
  standalone: true,
  imports: [],
  templateUrl: './form-new-product.component.html',
  styleUrl: './form-new-product.component.css'
})
export class FormNewProductComponent {

  // 1 - mi serve il service.
    // lo devo iniettare.

constructor(private productService:ProductService){}

product: Product =
{

id:0,
name:'',
proteins:0,
carbs:0,
fats:0,
price:0,
description:'',
ingredients:'',
image:'',
vegan:false
};

save():void
    {
        // per ora lo loggo e basta...
        let copy = {...this.product};

        // solo console.log per ora...
        this
            .productService
            .newProduct(copy)
            .subscribe(product=>alert('Inserted with id'+product.id))
            // aspetto di vedere cosa mi da...

            // cosa faccio? newProduct NON MI DA' UN PRODOTTO
            // ma un OBSERVABLE che produrrà un prodotto.

        // ripulisco la form 

        this.product =  
        {
            id:0,
            name:'',
            proteins:0,
            carbs:0,
            fats:0,
            price:3,
            description:'',
            ingredients:'',
            image:'',
            vegan:false
        };
    

    }











}
