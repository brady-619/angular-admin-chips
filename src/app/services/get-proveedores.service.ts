import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProveedoresService {

  constructor(private http:HttpClient) { }

  GetProveedores():Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.get('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/get-proveedores').subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}

}

