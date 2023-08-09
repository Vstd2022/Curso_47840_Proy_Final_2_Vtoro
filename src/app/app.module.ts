import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConverterPipe } from './dashboard/Pages/students/converter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { registerLocaleData } from '@angular/common';
import eslocale from '@angular/common/locales/es-AR'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ConverterPipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    HttpClientModule,    
    MatCardModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
