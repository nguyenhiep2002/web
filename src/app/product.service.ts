import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cart } from './customer/cart';
const url = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  lengthCart = new Subject<number>()
  tenacc = new Subject<object>()
  constructor(private http: HttpClient) { }
  getALl(): Observable<any> {
    this.getcart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    let dataacc: any = localStorage.getItem('acc');
    this.tenacc.next(JSON.parse(dataacc)) 
    console.log(this.tenacc)

    return this.http.get<any>(`${url}/spnoibat`)
  }
  getHot(): Observable<any> {
    return this.http.get<any>(`${url}/HotTrend`)
  }
  getDanh(): Observable<any> {
    return this.http.get<any>(`${url}/danhmuc`)
  }
  getDanhedit(id :number): Observable<any> {
    return this.http.get<any>(`${url}/danhmuc/${id}`)
  }
  getChay(): Observable<any> {
    return this.http.get<any>(`${url}/chayslide`)
  }
  getPage(): Observable<any> {
    return this.http.get<any>(`${url}/page`)
  }
  // getDetaill(id: any): Observable<any> {
  //   return this.http.get<any>(`${url}/HotTrend/${id}`)
  // }
  // getDetail(id: any): Observable<any> {
  //   return this.http.get<any>(`${url}/spnoibat/${id}`)
  // }
  // getDetailll(id: any): Observable<any> {
  //   return this.http.get<any>(`${url}/chaysilde/${id}`)
  // }
  getDetailshop(id: any): Observable<any> {
    return this.http.get<any>(`${url}/page/${id}`)
  }
  getpage(a:number):Observable<any>{
    return this.http.get<any>(`${url}/page?_page=${a}&_limit=12`)
  }
  //loc
  getloc(id:number):Observable<any>{
    return this.http.get<any>(`${url}/page?danhmuc_id=${id}`)
  }
  getloccon(id:number):Observable<any>{
    return this.http.get<any>(`${url}/page?danhmuc_con=${id}`)
  }
  //dangky
  register(data: any): Observable<any>{
    return this.http.post<any>(`${url}/account`,data);
  }
  //login
  login(data:any):Observable<any>{
    return this.http.get(`${url}/account?email=${data.email}&password=${data.password}`);
  }
  //admin
  acc(): Observable<any> {
    return this.http.get(`${url}/account`);
  }
  //xóa
  delete(id: any):Observable<any>{
    return this.http.delete(`${url}/page/${id}`)
  }
  deletecat(id: any):Observable<any>{
    return this.http.delete(`${url}/danhmuc/${id}`)
  }
  //them sp
  addPro(data:any):Observable<any>{
    return this.http.post<any>(`${url}/page`,data)
  }
  //themdanh
  addCat(data:any):Observable<any>{
    return this.http.post<any>(`${url}/danhmuc`,data)
  }
  //sua
  getFix(id:number,data:any): Observable<any> {
    return this.http.get<any>(`${url}/page/${id}`,data)
  }
  updateProduct(id:number,product: any[]) {
    return this.http.put(`${url}/page/${id}`, product);
  }
  getEdit(id: number, product: any[]) {
    return this.http.put(`${url}/danhmuc/${id}`, product);
  }
  //chi trang cart
  postcart(data:Cart):Observable<Cart>{
    this.getcart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.post<Cart>(`${url}/cart`,data)
  }
  putcart(data: Cart): Observable<Cart> {
    this.getcart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.put<Cart>(`${url}/cart/${data.id}`, data)
  }
  getcart(): Observable<any> {
    this.http.get<Cart[]>(`${url}/cart`).subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.get<any>(`${url}/cart`)
  }
  removecart(id:number): Observable<any> {
    this.getcart().subscribe(data => {
      this.lengthCart.next(data.length)
    })
    return this.http.delete<any>(`${url}/cart/${id}`)
  }
}
