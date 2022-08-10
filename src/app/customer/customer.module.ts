import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomerRoutingModule } from './customer-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { ShopComponent } from './main/shop/shop.component';
import { DetailComponent } from './main/detail/detail.component';
import { CartComponent } from './main/cart/cart.component';
import { SignupComponent } from './main/signup/signup.component';
import { SinginComponent } from './main/singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
  CustomerComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  ShopComponent,
  DetailComponent,
  CartComponent,
  SignupComponent,
  SinginComponent,
  SearchPipe
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
