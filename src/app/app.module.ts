import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { Page404Component } from './page404/page404.component';
import { ProduitComponent } from './produit/produit/produit.component';
import { AddprodComponent } from './produit/addprod/addprod.component';
import { UpdateprodComponent } from './produit/updateprod/updateprod.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent,
    Page404Component,
    ProduitComponent,
    AddprodComponent,
    UpdateprodComponent,
    ProduitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
