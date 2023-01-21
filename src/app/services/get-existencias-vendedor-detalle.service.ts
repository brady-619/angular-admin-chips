import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetExistenciasVendedorDetalleService {

  constructor(private http:HttpClient) { }

  GetExistenciasDetalle(request:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/get_listado_existencias_vendedor',request).subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}

}