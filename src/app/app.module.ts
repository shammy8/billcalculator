import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people.service';
import { DialogAlreadyExistsComponent } from './dialog-already-exists/dialog-already-exists.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent, DialogAlreadyExistsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [PeopleService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAlreadyExistsComponent],
})
export class AppModule {}
