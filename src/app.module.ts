import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { enableProdMode } from '@angular/core';

import { routing } from './app.routing'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'

import { UserService } from './providers/users.service'
import { CapitalizePipe } from './pipes/capitalize.pipe' 

enableProdMode();

@NgModule({
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CapitalizePipe ],
  bootstrap: [ AppComponent ],
  providers: [ UserService ]
})
export class AppModule { }