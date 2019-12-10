import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [AppComponent, PeopleComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [PeopleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
