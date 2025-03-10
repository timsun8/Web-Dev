import { Component, inject} from '@angular/core';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { TagsComponent } from "../tags/tags.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [TagsComponent, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  product?: Product;
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.product = this.productService.getProductById(params['id']);
      }
    });
  }

}
