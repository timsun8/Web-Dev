import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { ShareButtonsComponent } from '../share-buttons/share-buttons.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchComponent, TagsComponent, ShareButtonsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  products:Product[] = [];
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe(params => {
      if(params['searchTerm']) {
        this.products = this.productService.getAll().filter(product => 
          product.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }
      else if(params['tag']) {
        this.products = this.productService.getAllProductsByTag(params['tag']);
      }
      else {
        this.products = this.productService.getAll();
      }
    })
  }

}
