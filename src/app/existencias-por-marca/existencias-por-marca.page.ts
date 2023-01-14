import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetSimsContadorVendedorService }  from '../services/get-sims-contador-vendedor.service';



@Component({
  selector: 'app-existencias-por-marca',
  templateUrl: './existencias-por-marca.page.html',
  styleUrls: ['./existencias-por-marca.page.scss'],
})
export class ExistenciasPorMarcaPage implements OnInit {

  constructor(private router: Router,private getsimscontador: GetSimsContadorVendedorService,public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  vendedor_contador:any;
  simscontador:any;

 async ionViewWillEnter(){ 


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
  

}
