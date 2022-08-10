import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-addcatogery',
  templateUrl: './addcatogery.component.html',
  styleUrls: ['./addcatogery.component.css']
})
export class AddcatogeryComponent implements OnInit {
  formCat = new FormGroup({
    name: new FormControl(''),
    id : new FormControl(''),
  })
  constructor(private data: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.data.addCat(this.formCat.value).subscribe((data) => {
      if (data) {
        Swal.fire({
          icon: 'success',
          title: 'Thêm danh mục thành công',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate([`admin/add`])
      }
    })
  }

  }

