import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { GetHistoricoContadorVendedorService } from '../services/get-historico-contador-vendedor.service';
import { GetHistoricoVendedoresProveedorService } from '../services/get-historico-vendedores-proveedor.service';
@Component({
  selector: 'app-sims-vendedor-detalle',
  templateUrl: './sims-vendedor-detalle.page.html',
  styleUrls: ['./sims-vendedor-detalle.page.scss'],
})
export class SimsVendedorDetallePage implements OnInit {

  vendedor: any;
  simscontador: any;
  inicio: any;
  fin: any;
  proveedor: any;
  detalles:any;
  term:any;
  
  constructor(private getContadorHistoricoProveedor: GetHistoricoVendedoresProveedorService,private router: Router, private getContadorHistorico: GetHistoricoContadorVendedorService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }


  regresar() {
    this.router.navigate(['/sims-vendedor'])
  }

  async ionViewWillEnter() {
    this.proveedor = false;
    this.vendedor = localStorage.getItem('vendedor_detalle')
    this.inicio = localStorage.getItem('inicio_detalle')
    this.fin = localStorage.getItem('fin_detalle')



    const params = {
      vendedor: this.vendedor,
      inicio: this.inicio,
      fin: this.fin
    }

    await this.getContadorHistorico.GetHistoricoContadorVendedor(params).then(async resp => {

      //  console.log("la resp es:", resp)
      this.simscontador = resp.data;

      console.log(this.simscontador)
      // let userList2 = this.data;
      // console.log("ul2", userList2)
      // localStorage.setItem("lista", userList2)


      if (this.simscontador == false) {
        this.simscontador = null;
        // alert("Cliente no validado, favor de revisar de nuevo.")

        const alert = await this.alertCtrl.create({
          header: 'Vendedor no cuenta con inventario.',
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']
        });
        await alert.present();



      }
    });




  }


 async detalle(compania: any) {
    // console.log("Compa",compania);
    // obtenemos datos para envio de servicio
    //proveedor
    this.proveedor = compania;
    //inicio
    this.inicio
    //fin
    this.fin
    //vendedor
    this.vendedor
// console.log("req",this.proveedor,this.inicio,this.fin,this.vendedor);




const request = {
  vendedor: this.vendedor,
  inicio: this.inicio,
  fin: this.fin,
  compania: this.proveedor
}

await this.getContadorHistoricoProveedor.GetHistoricoVendedoresProveedor(request).then(async resp => {

  //  console.log("la resp es:", resp)
  this.detalles = resp.data;

  console.log(this.detalles)
  // let userList2 = this.data;
  // console.log("ul2", userList2)
  // localStorage.setItem("lista", userList2)


  if (this.detalles == false) {
    this.detalles = null;
    // alert("Cliente no validado, favor de revisar de nuevo.")

    const alert = await this.alertCtrl.create({
      header: 'Vendedor no cuenta con inventario.',
      // subHeader: 'SubTitle',  
      // message: 'This is an alert message',  
      buttons: ['OK']
    });
    await alert.present();



  }
});







  }


}
