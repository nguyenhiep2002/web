import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prod1: any=[];
  prod2: any = [];
  prod3: any = [];
  prod4: any = [];
  prod5: any = [];
  hot:any;
  chay:any;
  constructor(private data: ProductService) { }

  ngOnInit(): void {
    //
    this.data.getPage().subscribe((hihi) => {
      this.prod1 =hihi[0];
      this.prod2 =hihi[1];
      this.prod3 =hihi[2];
      this.prod4 =hihi[3];
      this.prod5 =hihi[4];
    })
    this.data.getHot().subscribe((haha) => {
      this.hot= haha;
    })
    this.data.getChay().subscribe((hehe) => {
      this.chay= hehe;
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots: true,
    responsive: {
        
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  }
}
