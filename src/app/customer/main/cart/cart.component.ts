import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
listcart:any;
total:number =0;
ship:number =35000;
  constructor(private data :ProductService,private route:Router) { }

  ngOnInit(): void {
   this.getcart()
  }
  getcart(){
    this.data.getcart().subscribe((data) => {
      this.listcart = data;
      this.total=0
      this.listcart.forEach((element: any) => {
        this.total += (element.price * element.quantity)
      });
    }
    )
  }
  deletecart(id:any){
    this.data.removecart(id).subscribe((data)=>{
      alert('xoa thanh cong')
      this.getcart()
    })
  }
  mark(mark: any, id: any) {
    let quantily: any = document.getElementById(`quantily${ id }`)
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
        let datas = this.listcart.find((item: any) => {
          return item.id == id
        })

        datas.quantity = Number(quantily.value)
        this.data.putcart(datas).subscribe((data) => {
        })
        this.getcart()
      }
    } else {
      quantily.value = Number(quantily.value) + 1
      let datas = this.listcart.find((item: any) => {
        return item.id == id
      })
      console.log(datas);

      datas.quantity = Number(quantily.value)
      this.data.putcart(datas).subscribe((data) => {
        console.log(data);

      })
      this.getcart()
    }
  }
  ok(){
    if (this.total ==0){
      Swal.fire({
        icon: 'error',
        title: 'Lỗi',
        text: 'Giỏ hàng của bạn không có sản phẩm nào',
        footer: '<a routerLink="Shop" href="">Bạn có muốn quay lại trang shop?</a>'
      })
    }else{
      Swal.fire({
        title: 'Bạn đã đặt hàng thành công',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("assets/images/cat1.gif")
    left top
    no-repeat
  `
      });
   
    this.listcart.forEach((data:any)=>{
      console.log(data.id)
      this.data.removecart(data.id).subscribe((data) => {
      this.getcart();
      })
    }
    )
    }
  }
}
