import { AddprodComponent } from './produit/addprod/addprod.component';
import { Page404Component } from './page404/page404.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit/produit.component';
import { UpdateprodComponent } from './produit/updateprod/updateprod.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {path :'produit' , component : ProduitComponent },
  {path : 'addproduit' , component : AddprodComponent},
  {path : 'updaProd/:id ' , component : UpdateprodComponent},

  {
    path:'login', component:LoginComponent
  },
  {
    path:'register',    component:RegisterComponent
  },

  {
    path:'test',    component:TestComponent
  },
  {
    path:'**',    component:Page404Component
   },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
