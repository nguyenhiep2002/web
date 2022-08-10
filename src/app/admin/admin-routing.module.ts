import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddcatogeryComponent } from './main/addcatogery/addcatogery.component';
import { AddspComponent } from './main/addsp/addsp.component';
import { AllComponent } from './main/all/all.component';
import { CatogeryComponent } from './main/catogery/catogery.component';
import { EditcatComponent } from './main/editcat/editcat.component';
import { FixComponent } from './main/fix/fix.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {path:'', component:AdminComponent, children:[
    {
      path:'',component:HomeComponent,
    },
    {
      path:'all',component:AllComponent
    },
    {
      path:'add',component:AddspComponent
    },
    {
      path:'addcato',component:AddcatogeryComponent
    },
    {
      path:'cat',component:CatogeryComponent
    },
    {
      path:'fix/:id',component:FixComponent
    },
    {
      path:'editcato/:id',component:EditcatComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
