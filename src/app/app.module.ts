import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people.service';
import { DialogAlreadyExistsComponent } from './dialog-already-exists/dialog-already-exists.component';
import { ReceiptItemsComponent } from './receipt-items/receipt-items.component';
import { DragDropBottomSheetComponent } from './drag-drop-bottom-sheet/drag-drop-bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    DialogAlreadyExistsComponent,
    ReceiptItemsComponent,
    DragDropBottomSheetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAlreadyExistsComponent, DragDropBottomSheetComponent],
})
export class AppModule {}
