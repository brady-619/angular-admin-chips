import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetHistoricoVendedoresProveedorService {


  constructor(private http:HttpClient) { }

  GetHistoricoVendedoresProveedor(request:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/get_sims_contador_historico_vendedor_proveedor',request).subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}

}


