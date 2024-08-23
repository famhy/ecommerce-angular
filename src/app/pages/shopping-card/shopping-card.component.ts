import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css',
})
export class ShoppingCardComponent implements OnInit {
  shoppingCard: any[] = [];
  total = 0;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getShoppingCard().subscribe((value) => {
      this.shoppingCard = value;
      this.calcTotal();
    });
  }

  calcTotal() {
    let sum = 0;

    this.shoppingCard.forEach((el) => {
      sum += el.price * el.quantity;
    });

    this.total = sum;
  }

  inc(index: number) {
    this.shoppingCard[index].quantity++;
    this.calcTotal();
  }
  desc(index: number) {
    this.shoppingCard[index].quantity--;
    this.calcTotal();
  }

  remove(item: any) {
    this.productService.removeFromShoppingCard(item).subscribe((value) => {
      this.shoppingCard = value;
      this.calcTotal();
    });
  }
}
