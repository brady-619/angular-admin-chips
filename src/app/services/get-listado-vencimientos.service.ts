import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetListadoVencimientosService {

 

  constructor(private http:HttpClient) { }

  GetListadoVencimientos():Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.get(' https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/get_listado_vencimientos').subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}
}