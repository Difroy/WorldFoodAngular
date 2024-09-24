import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Importa HttpClientModule qui
import { AppComponent } from '../app.component'; // Importa il tuo AppComponent
import { ProductComponent } from '../product/product.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, MenuComponent, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
