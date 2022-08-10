import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.css']
})
export class EditcatComponent implements OnInit {
  formedit = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
  });
  id: any;
  constructor(private data: ProductService, private router: ActivatedRoute, private route: Router ){ }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.formedit.patchValue({
    })
    this.data.getDanhedit(this.id).subscribe((data) => {
      this.formedit.patchValue(data)
    });
  }
  onSubmit(): void {
   
    console.log(this.formedit)
    this.data.getEdit(this.id, this.formedit.value).subscribe((haha) => {
      if (haha) {
        this.route.navigate(['/admin/cat']),
          console.log('haha')
      }
    })
  }
}
