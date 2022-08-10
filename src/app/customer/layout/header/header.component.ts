import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  infor:any;
  solg:any;
  constructor(private router:Router,private data: ProductService) { }

  ngOnInit(): void {
    this.data.getALl().subscribe((data)=>{
    })
    this.data.lengthCart.subscribe((data)=>{
      this.solg=data;
    })
    this.data.tenacc.subscribe((data)=>{
      this.infor=data;
    })
   
  }
  logout(){
    localStorage.clear();
    let dataacc: any = localStorage.getItem('acc');
    this.infor = JSON.parse(dataacc);
    console.log(this.infor)
    this.router.navigate([""])
    
  }
 
}
