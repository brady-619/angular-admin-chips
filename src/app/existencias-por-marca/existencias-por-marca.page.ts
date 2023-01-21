import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetSimsContadorVendedorService }  from '../services/get-sims-contador-vendedor.service';
import { GetExistenciasVendedorDetalleService }  from '../services/get-existencias-vendedor-detalle.service';



@Component({
  selector: 'app-existencias-por-marca',
  templateUrl: './existencias-por-marca.page.html',
  styleUrls: ['./existencias-por-marca.page.scss'],
})
export class ExistenciasPorMarcaPage implements OnInit {

  constructor(private getExistenciasDetalle: GetExistenciasVendedorDetalleService,private router: Router,private getsimscontador: GetSimsContadorVendedorService,public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  vendedor_contador:any;
  simscontador:any;
  existencias:any;

 async ionViewWillEnter(){ 

  this.existencias = false;


  this.vendedor_contador = await localStorage.getItem("vendedor_contador")

  const params = {
      vendedor: this.vendedor_contador
    }


    await this.getsimscontador.GetSimsContador(params).then(async resp => {

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

regresar(){
  this.router.navigate(['/existencias-por-vendedor'])
}



async detalle(compania:any){
  // console.log("detalle",compania);
  // console.log("vendedor",this.vendedor_contador);
  
  const request = {
    vendedor: this.vendedor_contador,
    compania: compania
  }

  console.log("request", request)

  



  await this.getExistenciasDetalle.GetExistenciasDetalle(request).then(async resp => {

    //  console.log("la resp es:", resp)
    this.existencias = resp.data;

     console.log(this.existencias)
    // let userList2 = this.data;
    // console.log("ul2", userList2)
    // localStorage.setItem("lista", userList2)


  });





}
  

}
