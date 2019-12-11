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
  MatStepperModule,
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
  MatStepperModule,
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents],
})
export class MaterialModule {}
