import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SignalsModule } from './signals/signals.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule, SignalsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
