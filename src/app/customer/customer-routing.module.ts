import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CartComponent } from './main/cart/cart.component';
import { DetailComponent } from './main/detail/detail.component';
import { HomeComponent } from './main/home/home.component';
import { ShopComponent } from './main/shop/shop.component';
import { SignupComponent } from './main/signup/signup.component';
import { SinginComponent } from './main/singin/singin.component';

const routes: Routes = [
  {path:'',component:CustomerComponent,children:[
    {path:'',component:HomeComponent},
    {path:"Shop",component:ShopComponent},
    {path:"Cart",component:CartComponent},
    {path:"Detail/:id",component:DetailComponent},
    {path:"Singin",component:SinginComponent}, 
    {path:"Signup",component:SignupComponent},
    {path:"cart",component:CartComponent}
  ]}
  // {path:'',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
