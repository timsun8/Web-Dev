import { Component, inject, Input} from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-tags',
  imports: [ CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {

  @Input()
  productPageTags?:string[];
  tags:Tag[] = [];
  private productService = inject(ProductService)

  constructor() {
    if(!this.productPageTags) {
      this.tags = this.productService.getAllTags();
    }
  }

}
