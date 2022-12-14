import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportIccService {


  constructor(private http:HttpClient) { }

//   BusquedaFecha(params):Promise<any> {
//   return new Promise((resolve,reject) => {
//     this.http.post('https://6yficn23bg.execute-api.us-east-1.amazonaws.com/dev/busqueda-por-fecha',params).subscribe(resp => {
//       resolve(resp);
//     },err=>{
//       reject(err)
//     })            
//   })
// }

}
