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

//APP_COMPONENT => MENU_COMPONENT => PRODUCTSERVICE => HTTPCLIENT


// COMPONENT   COMPONENT     SERVICE    SERVICE

/*Riceviamo dal componente un oggetto di tipo Product.
LO MANDO ALLA api CON METODO POST 
LA API MI RIMANDA UN pRODUCT 
E IO LO RIMANDO AL COMPONENTE

ENTRA UN PRODOTTO, ESCE UN OBSERVABLE CHE UN GIORNO
PRODURRÀ UN PRODOTTO
IO NON RESTITUISCO UN PRODOTTO
IO RESTITUISCO UNA CONNESSIONE DA CUI UN GIORNO FORSE USCIRA UN PRODOTTO

*/


newProduct(product:Product):Observable<Product>{

return this.http.post<Product>(this.url,      product);

                          //indirizzo API   CORPO REQUEST

// il post mi restituisce un oggetto di tipo Product
 }




}
