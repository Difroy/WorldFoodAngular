import { Component } from '@angular/core';
import { Product } from './model/Product';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { MenuComponent } from "./menu/menu.component";
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent
{

  title = 'WorldFood';
  arepa:Product = 
  {
      id:1, name:'Arepa', carbs:70, proteins:6, fats:2, price:3, 
      vegan:true, description:'Arepa venezuelana', 
      ingredients:'Mais,acqua,sale',
      image:'arepa.jpeg'
  }

  pizza:Product = 
  {
      id:1, name:'Margherita', carbs:70, proteins:6, fats:2, price:3, 
      vegan:true, description:'The Myth', 
      ingredients:'Farina di grano, acqua, sale, pomodoro, mozzarella, olio di oliva, basilico',
      image:'pizza.jpeg'
  }


}
