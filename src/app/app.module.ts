import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConverterPipe } from './dashboard/Pages/students/converter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ConverterPipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
