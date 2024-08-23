import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { products } from '../../../assets/data';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PreviewDialogComponent } from '../../component/preview-dialog/preview-dialog.component';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  products = products;
  readonly dialog = inject(MatDialog);

  constructor(private productService: ProductService) {}
  ngOnInit(): void {}

  openDialog(item: any) {
    const dialogRef = this.dialog.open(PreviewDialogComponent, {
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addToShoppingCard(item: any) {
    this.productService.addToShoppingCard(item).subscribe();
  }
}
