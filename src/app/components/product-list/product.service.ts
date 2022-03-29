import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs';
import { IProduct } from './product';
import  _jsonURL  from 'src/products.json';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';

    Products: any|IProduct[] = _jsonURL;

    constructor(private http: HttpClient) {}

    getProducts(): Observable<any | IProduct[]> {
        return this.http.get<any | IProduct[]>(this.productUrl)
          .pipe(
            tap((data: any) => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
          );
    }

    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
          .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
          );
    }




    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}

