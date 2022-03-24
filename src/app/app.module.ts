import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './components/shared/convert-to-spaces.pipe';
import { StarComponent } from './components/star/star.component';

@NgModule({
  // declarations are components that WE declare locally to be acknowledged
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  // imports are modules that we import into our application from other sources
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
