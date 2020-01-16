import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainnav/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './mainnav/sidenav/sidenav.component';
import { DemoMaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { FeedDataService } from './services/feed-data.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [FeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
