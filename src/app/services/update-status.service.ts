import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateStatusService {

  constructor(private http:HttpClient) { }


    UpdateStatus(params:any):Promise<any> {
  return new Promise((resolve,reject) => {
    this.http.post('https://pvro1h66g4.execute-api.us-east-1.amazonaws.com/dev/update_status',params).subscribe(resp => {
      resolve(resp);
    },err=>{
      reject(err)
    })            
  })
}
}
