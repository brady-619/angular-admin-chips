import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertVendedorService {

  constructor(private http:HttpClient) { }


    InsertVendedor(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/insert_vendedor',params).subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}
}
