import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-grid">
      @for (p of products; track p.id) {
        <app-product-item [product]="p" (onRemove)="removeProduct($event)" />
      } @empty {
        <p class="empty-msg">В этой категории нет товаров.</p>
      }
    </div>
  `,
  styles: [`
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; padding: 20px; }
    .empty-msg { text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: gray; }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(id: number) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
