import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Cart } from '../../cart';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
detail2:any=[];
datacart= new Cart();
index:any;
quantily:any;
  constructor(private data: ProductService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    if (5 < id && id < 14){ 
      this.data.getDetailshop(id).subscribe((date) => {
        this.detail2 = date;
      })
    } else if (id < 6){
      this.data.getDetailshop(id).subscribe((data) => {
        this.detail2 = data;
      })
    } else {
      this.data.getDetailshop(id).subscribe((dati) => {
        this.detail2 = dati;
      })
    }

    this.data.getDetailshop(id).subscribe((data)=>{
      this.detail2 = data;
    })
}
  mark(mark: any) {
    let quantily: any = document.getElementById('quantily')
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
  }
  cart(){
    let temp: any = document.getElementById('quantily')
    this.quantily =Number(temp.value)
    this.datacart.idpro =this.detail2.id
    this.datacart.danhmuc_id =this.detail2.danhmuc_con
    this.datacart.name =this.detail2.name
    this.datacart.anh =this.detail2.anh
    this.datacart.price =this.detail2.price
    this.datacart.quantity =this.quantily
    this.data.getcart().subscribe(data =>{
      this.index =data.find((data:any)=>{
        return data.idpro==this.datacart.idpro
      })
      console.log(this.datacart.idpro)
      if(this.index){
        this.index.quantity +=this.quantily
        this.data.putcart(this.index).subscribe(data=>{
        })
        alert('Sản phẩm đã có trong giỏ hàng')
      }else{
        this.data.postcart(this.datacart).subscribe((data)=>{
          if(data){
            Swal.fire({
              icon: 'success',
              title: 'Đã thêm vào giỏ hàng ',
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
    })
  }
}
