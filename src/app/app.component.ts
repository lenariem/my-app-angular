import { Observable, tap } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-app-angular';
  //products: IProduct[] = [];
  products$: Observable<IProduct[]>
  loading = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
   /*  this.productsService.getAll().subscribe((products) => {
      this.products = products;
      this.loading = false;
    }); */
    this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false))
  }
}
