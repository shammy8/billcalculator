import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatBadgeModule,
  MatExpansionModule,
  MatSelectModule,
  MatTableModule,
} from '@angular/material';

const MaterialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatBadgeModule,
  MatExpansionModule,
  MatSelectModule,
  MatTableModule,
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents],
})
export class MaterialModule {}
