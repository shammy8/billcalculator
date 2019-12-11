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
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents],
})
export class MaterialModule {}
