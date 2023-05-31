import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class GetPuntosDeVentaService {

constructor(private http:HttpClient) { }

GetPuntosDeVenta():Promise<any> {
return new Promise((resolve,reject) => {
  this.http.get('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/get-listado-puntos-de-venta').subscribe({
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

