import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductComponent } from "../product/product.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ProductComponent, NgFor,FormsModule, HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent 
{

    constructor(private productService:ProductService){}

    //è un metodo particolare che fa parte del lifeCycle del componente. (ngOnInit)
    ngOnInit():void
    {
        console.log('Sono stato chiamato');
        // questo metodo viene usato per inizializzare il componente dopo la creazione 
        this.loadProducts();
    }
  
    //Io so di non sapere...
    products:Product[] = [];

    key:string=''; // conterrà il valore di ricerca

    getProducts():Product[]
    {
        return    this.key.length ==0                         ?   
                  this.products                               :
                  this.products.filter(x=>this.matches(x));
    }

    matches(x:Product):boolean
    {
        let s:string = 
          x.name+' '+x.description+' '+x.ingredients+' '+(x.vegan ? 'VEG' :'');
        s = s.toLowerCase();
        return s.includes(this.key.toLowerCase());
    }

    loadProducts():void
    {
        // io chiamo il service per impostare i miei prodotti
        // io voglio ottenere una lista di Product

        this                                                    // MENU COMPONENT
            .productService                                     // ProductService
            .getProducts()                                      // Observable<Product[]>
            .subscribe(products=>this.products=products);
            // subscribe è il nostro then()
            // QUANDO l'Observable produrrà i prodotti
            // quindi, QUANDO la chiamata HTTP risponderà
            // l'observable produrrà una lista di prodotti che ho chiamato products
            // e io cosa ci faccio? Li metto nella mia lista products.

    }


}
