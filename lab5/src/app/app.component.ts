import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <header><h1>Kaspi Catalog Lab 5</h1></header>
    <nav class="categories">
      @for (cat of categories; track cat.id) {
        <button [class.active]="selectedCategory?.id === cat.id" (click)="selectCategory(cat)">
          {{ cat.name }}
        </button>
      }
    </nav>
    <main>
      @if (selectedCategory) {
        <app-product-list [products]="filteredProducts" />
      } @else {
        <div class="welcome"><h2>Выберите категорию товаров</h2></div>
      }
    </main>
  `,
  styles: [`
    .categories { display: flex; gap: 10px; justify-content: center; padding: 20px; }
    button { padding: 10px 20px; border-radius: 20px; border: 1px solid #ccc; cursor: pointer; }
    button.active { background: #ff3b30; color: white; border-color: #ff3b30; }
    .welcome { text-align: center; margin-top: 50px; }
  `]
})
export class AppComponent {
  categories: Category[];
  selectedCategory: Category | null = null;
  allProducts: Product[];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  get filteredProducts() {
    return this.allProducts.filter(p => p.categoryId === this.selectedCategory?.id);
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
