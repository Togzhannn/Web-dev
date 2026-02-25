import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.services';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Сигналы согласно заданию
  products = signal<Product[]>([]);
  favoriteIds = signal<number[]>([]);
  showFavoritesOnly = signal(false);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const data = this.productService.getProducts();
    this.products.set(data);
  }

  // Вычисляемые свойства (Computed)
  favoritesCount = computed(() => this.favoriteIds().length);

  displayedProducts = computed(() => {
    if (this.showFavoritesOnly()) {
      return this.products().filter(p => this.favoriteIds().includes(p.id));
    }
    return this.products();
  });

  // Методы переключения избранного через .update()
  toggleFavorite(productId: number) {
    this.favoriteIds.update(ids =>
      ids.includes(productId)
        ? ids.filter(id => id !== productId)
        : [...ids, productId]
    );
  }

  isFavorite(productId: number): boolean {
    return this.favoriteIds().includes(productId);
  }
}
