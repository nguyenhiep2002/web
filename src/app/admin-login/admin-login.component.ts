import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  formSigup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  })
  error: any;
  constructor(private acc: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.checkloginadmin(this.formSigup.value);
    console.log(this.formSigup.value)
  }
  checkloginadmin(data:any):void{
    this.acc.acc().subscribe(datas=>{
      var check = datas.find((item:any) => item.email== data.email && item.password == data.password && item.role ==='admin');
      if(check){
        localStorage.setItem('adminLogin',JSON.stringify(check));
        this.router.navigate(['admin'])
      }else{

      }
    })
  }
  get f(): any {
    return this.formSigup.controls;
  }

}
