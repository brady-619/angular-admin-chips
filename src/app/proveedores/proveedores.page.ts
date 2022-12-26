import { Component, OnInit } from '@angular/core';
import { GetProveedoresService} from '../services/get-proveedores.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

data:any;

  constructor(private proveedores: GetProveedoresService,private http: HttpClient) { }

 async ngOnInit() {

    await this.proveedores.GetProveedores().then(resp =>  {
      
      console.log("resp",resp)

      this.data = resp.data;

      }).catch(error=> {
        /* Código a realizar cuando se rechaza la promesa */
        console.log("NO paso chido",error)
      });
  
  
  
  
  
  
  
  
  
  }

  

}
