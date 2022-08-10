import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
all:any=[];
keyword:any ='';
  constructor(private data: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.data.getPage().subscribe((haha)=>{
      this.all=haha;
    })
  }
  lewlew(id: number) {
    this.router.navigate([`Detail/${id}`])
  }
  fix(id: number) {
    this.router.navigate([`admin/fix/${id}`])
  }
  dete(id:number):void{
    this.data.delete(id).subscribe((haha)=>{
      this.data.getPage().subscribe(haha =>{
        this.all = haha;
      })
      })
    }
  
  }

