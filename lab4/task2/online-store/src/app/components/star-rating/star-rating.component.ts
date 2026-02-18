import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;

  get stars() {
    const stars = [];
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      stars.push({
        filled: i <= fullStars || (i === fullStars + 1 && hasHalfStar)
      });
    }
    return stars;
  }
}
