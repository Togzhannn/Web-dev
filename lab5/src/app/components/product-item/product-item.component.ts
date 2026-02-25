import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() onRemove = new EventEmitter<number>();

  currentImgIndex = 0;

  like() { this.product.likes++; }

  remove() {
    if (confirm(`Вы уверены, что хотите удалить ${this.product.name}?`)) {
      this.onRemove.emit(this.product.id);
    }
  }

  share(type: 'wa' | 'tg') {
    const url = encodeURIComponent(this.product.link);
    if (type === 'wa') window.open(`https://wa.me/?text=${url}`);
    else window.open(`https://t.me/share/url?url=${url}`);
  }

  nextImg() { this.currentImgIndex = (this.currentImgIndex + 1) % this.product.images.length; }
}
