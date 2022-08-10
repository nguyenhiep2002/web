import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-addsp',
  templateUrl: './addsp.component.html',
  styleUrls: ['./addsp.component.css']
})
export class AddspComponent implements OnInit {
  list:any;
  image:string = '';
  formData = new FormGroup({
    name: new FormControl(''),
    danhmuc_con: new FormControl(''),
    price: new FormControl(''),
    price_sale: new FormControl(''),
    anh: new FormControl(''),
  })
  constructor(private data: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.data.getDanh().subscribe((haha)=>
    {
      this.list=haha;
    })
  }
  changeImage(event:any){
    const reader =new FileReader();
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload=()=>{
      this.image = reader.result as string;
    }

  }
  onSubmit():void{
    this.formData.patchValue({
      anh: this.image
    })
   this.data.addPro(this.formData.value).subscribe((data)=>{
    if(data){
      Swal.fire({
        icon: 'success',
        title: 'Thêm sản phẩm thành công ',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate([`admin/all`])
    }
   })
  }
  adddanh(){
    this.router.navigate([`admin/addcato`])
  }
}
