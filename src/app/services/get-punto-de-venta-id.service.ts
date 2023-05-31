import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPuntoDeVentaIdService {


  constructor(private http:HttpClient) { }

  GetPuntosDeVentaId(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/get-punto-de-venta-id',params).subscribe({
      next: resp =>{
        // console.log(resp);
        resolve(resp);
  
      },
      error: err =>{
        console.log(err.error)
        reject(err)
      }
    });
  
  })}
}



