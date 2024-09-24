import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
    
    // ho creato una proprietà http e mi sono fatto passare HttpClient
    constructor(private http:HttpClient) { }

    url:string = 'localhost:8080/wf/api/products';

    // Observable: un giorno produrrò dei dati.
    // e quei dati saranno un vettore di Prodotti.
    getProducts():Observable<Product[]>
    {
        // Observable: qualcosa che osservo
        // STO OSSERVANDO la richiesta HTTP. Un giorno risponderà
        // e mi leggerò i risultati.
        // i risultati saranno una lista di oggetti di tipo Product
        return this.http.get<Product[]>(this.url);
        // è BELLISSIMO perchè non avete bisogno di 
        // configurare niente. Lui interpreta la response 
        // come fosse una lista di product.
        
    }


}
