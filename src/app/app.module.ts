import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products-module/product.module';
// import { ProductService } from './components/product-list/product.service';
// import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  // declarations are components that WE declare locally to be acknowledged
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  // imports are modules that we import into our application from other sources
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterTestingModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
  ],
  // providers are services that we want to make available throughout our application
  providers: [RouterModule],

  bootstrap: [AppComponent]
})
export class AppModule { }
