import { NgModule } from '@angular/core';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductDetailComponent } from '../components/products-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../components/products-detail/product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule { }
