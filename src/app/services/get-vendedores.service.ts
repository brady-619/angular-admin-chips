import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetVendedoresService {

  constructor(private http:HttpClient) { }

  GetVendedores():Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.get('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/get_vendedores').subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}
}




