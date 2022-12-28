import { Component, OnInit } from '@angular/core';
import { GetVendedoresService} from '../services/get-vendedores.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  data:any;

  constructor(private vendedores: GetVendedoresService,private http: HttpClient) { }


  async ngOnInit() {

    await this.vendedores.GetVendedores().then(resp =>  {
      
      console.log("resp",resp)

      this.data = resp.data;

      }).catch(error=> {
        /* Código a realizar cuando se rechaza la promesa */
        console.log("NO paso chido",error)
      });
  
  
  
  
  
  
  
  
  
  }


  nuevo(){
    console.log("click")

  }

}
