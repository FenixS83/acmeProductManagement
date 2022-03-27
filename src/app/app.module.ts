import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './components/shared/convert-to-spaces.pipe';
import { StarComponent } from './components/star/star.component';
import { WelcomeComponent } from './components/home/welcome.component';
import { ProductDetailComponent } from './components/products/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './components/products/product-detail.guard';

@NgModule({
  // declarations are components that WE declare locally to be acknowledged
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
  ],
  // imports are modules that we import into our application from other sources
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
