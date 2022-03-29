import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product-list/product';
import { ProductService } from '../product-list/product.service';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
  

  
})

export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage ='';
  product: IProduct | undefined

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }




  //   this.pageTitle += `" ${id}`;
  //   this.product= {
  //     "productId": 1,
  //     "productName": "Leaf Rake",
  //     "productCode": "GDN-0011",
  //     "releaseDate": "March 19, 2021",
  //     "description": "Leaf rake with 48-inch wooden handle.",
  //     "price": 19.95,
  //     "starRating": 3.2,
  //     "imageUrl": "assets/images/leaf_rake.png"
  //   };
  // }

  onBack(): void {
    this.router.navigate(['/products']);
  }


}
