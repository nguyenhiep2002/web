import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '',  loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path:'logadmin',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
