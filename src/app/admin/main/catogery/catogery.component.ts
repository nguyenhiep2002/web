import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-catogery',
  templateUrl: './catogery.component.html',
  styleUrls: ['./catogery.component.css']
})
export class CatogeryComponent implements OnInit {
  cat:any;
  constructor(private data: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.data.getDanh().subscribe((haha)=>
    {
      this.cat =haha;
    })
  }
  dete(id: number): void {
    this.data.deletecat(id).subscribe((haha) => {
      this.data.getDanh().subscribe(haha => {
        this.cat = haha;
      })
    })
  }
  adddanh() {
    this.router.navigate([`admin/addcato`])
  }
  edit(id:number){
    this.router.navigate([`admin/editcato/${id}`])
  }
}
