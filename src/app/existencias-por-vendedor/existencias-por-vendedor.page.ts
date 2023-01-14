import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetSearchVendedoresService } from '../services/get-search-vendedores.service';
import { GetSimsContadorVendedorService }  from '../services/get-sims-contador-vendedor.service';

@Component({
  selector: 'app-existencias-por-vendedor',
  templateUrl: './existencias-por-vendedor.page.html',
  styleUrls: ['./existencias-por-vendedor.page.scss'],
})
export class ExistenciasPorVendedorPage implements OnInit {

  constructor(private router: Router, private getvendedores: GetSearchVendedoresService,public alertCtrl: AlertController) { }

  vendedor:any;
  data:any;
  simscontador:any;

  vendedorForm = new FormGroup({
    vendedor: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  ngOnInit() {
  }

  async buscar() {
    // console.log("Busc");
    

    //  console.log("val:", this.vendedor+'%')
    // this.nombre_global = await localStorage.getItem("nombre_global")
    // console.log("nomb g:", this.nombre_global)

    const params = {
      nombre: this.vendedor+'%'
    }

    // console.log(params)

    /*obteniendo clientes*/
    await this.getvendedores.GetVendedores(params).then(async resp => {

      //  console.log("la resp es:", resp)
      this.data = resp.data;

      // console.log(this.data)
      // let userList2 = this.data;
      // console.log("ul2", userList2)
      // localStorage.setItem("lista", userList2)


      if (this.data == false) {
        this.data = null;
        // alert("Cliente no validado, favor de revisar de nuevo.")

        const alert = await this.alertCtrl.create({  
          header: 'Vendedor no registrado.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  



      }
    });

  }







  async existencias(vendedor:any){
    console.log("Consulta de existencias de ", vendedor);



    localStorage.setItem("vendedor_contador",vendedor)


    this.router.navigate(['/existencias-por-marca'])


    // const params = {
    //   vendedor: vendedor
    // }


    // await this.getsimscontador.GetSimsContador(params).then(async resp => {

    //   //  console.log("la resp es:", resp)
    //   this.simscontador = resp.data;

    //    console.log(this.simscontador)
    //   // let userList2 = this.data;
    //   // console.log("ul2", userList2)
    //   // localStorage.setItem("lista", userList2)


    //   if (this.simscontador == false) {
    //     this.simscontador = null;
    //     // alert("Cliente no validado, favor de revisar de nuevo.")

    //     const alert = await this.alertCtrl.create({  
    //       header: 'Vendedor no cuenta con inventario.',  
    //       // subHeader: 'SubTitle',  
    //       // message: 'This is an alert message',  
    //       buttons: ['OK']  
    //     });  
    //     await alert.present();  



    //   }
    // });







    

    
  }


}
