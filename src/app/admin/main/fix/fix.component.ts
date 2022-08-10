import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-fix',
  templateUrl: './fix.component.html',
  styleUrls: ['./fix.component.css']
})
export class FixComponent implements OnInit {

  constructor(private data: ProductService, private router: ActivatedRoute,private route:Router) { }
  fix:any=[];
  lit:any;
  id:any;
  image: string = '';
  formFix = new FormGroup({
    name: new FormControl(''),
    danhmuc_con: new FormControl(''),
    price: new FormControl(''),
    price_sale: new FormControl(''),
    anh: new FormControl(''),
  })
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.data.getDanh().subscribe((haha) => {
      this.lit = haha;
    });

    this.data.getDetailshop(this.id).subscribe((data) => {
      this.formFix.patchValue(data)
      this.image = this.formFix.value.anh
  });
   
  
}
  onSubmit():void {
    this.formFix.patchValue({
      anh: this.image
    })
    this.data.updateProduct(this.id,this.formFix.value).subscribe((haha)=>{
      if(haha){
        this.route.navigate(['/admin/all']),
        console.log('haha')
      }
    })
  }
  changeImage(event: any) {
    const reader = new FileReader();
    const file = event.target.files;
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      this.image = reader.result as string;
    }

  }
}
