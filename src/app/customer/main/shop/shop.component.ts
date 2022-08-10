import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  danh:any;
  // all1:any;
  // all2:any;
  all3:any;
  Loc:any;
  keyword:any='';
  constructor(private data: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.data.getDanh().subscribe((hoho) => {
      this.danh = hoho;
    })
    // this.data.getPage().subscribe((hehe) => {
    //   this.all3= hehe;
    // })
    this.data.getpage(1).subscribe((hehe)=>{
      this.all3=hehe;
    })
   console.log(this.keyword)
  }
  page1(){
    this.data.getpage(1).subscribe((hehe) => {
      this.all3 = hehe;
    })
  }
  full(){
    this.data.getpage(1).subscribe((hehe) => {
      this.all3 = hehe;
      document.getElementById('mat')?.classList.remove('mat')
    })
  }
  page2(){
    this.data.getpage(2).subscribe((hehe) => {
      this.all3 = hehe;
    })
  }
  page3(){
    this.data.getpage(3).subscribe((hehe) => {
      this.all3 = hehe;
    })
  }
  lewlew(id:number){
    this.router.navigate([`Detail/${id}`])
  }
  loc(id:any){
    if(id==1 ||id==2||id==3){
      this.data.getloc(id).subscribe((loc: any) => {
        this.all3 = loc;
        document.getElementById('mat')?.classList.add('mat')
      })
    }else{
      this.data.getloccon(id).subscribe((loc: any) => {
        this.all3 = loc;
        document.getElementById('mat')?.classList.add('mat')
      })
    }
    }
 
}
