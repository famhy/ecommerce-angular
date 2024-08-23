import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-preview-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './preview-dialog.component.html',
  styleUrl: './preview-dialog.component.css',
})
export class PreviewDialogComponent {
  readonly data = inject<any>(MAT_DIALOG_DATA);
}
