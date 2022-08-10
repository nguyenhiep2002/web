import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { SilderbaComponent } from './layout/silderba/silderba.component';
import { HomeComponent } from './main/home/home.component';
import { AllComponent } from './main/all/all.component';
import { AddspComponent } from './main/addsp/addsp.component';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FixComponent } from './main/fix/fix.component';
import { AddcatogeryComponent } from './main/addcatogery/addcatogery.component';
import { CatogeryComponent } from './main/catogery/catogery.component';
import { EditcatComponent } from './main/editcat/editcat.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SilderbaComponent,
    HomeComponent,
    AllComponent,
    AddspComponent,
    FixComponent,
    SearchPipe,
    AddcatogeryComponent,
    CatogeryComponent,
    EditcatComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
