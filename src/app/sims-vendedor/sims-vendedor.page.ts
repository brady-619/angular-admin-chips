import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { AppState } from '../app.reducer';
import { GetHistoricoVendedoresService } from '../services/get-historico-vendedores.service'; 
import { Store } from '@ngrx/store';
import { userConfig } from '../models/userconfig.model';

@Component({
  selector: 'app-sims-vendedor',
  templateUrl: './sims-vendedor.page.html',
  styleUrls: ['./sims-vendedor.page.scss'],
})
export class SimsVendedorPage implements OnInit {
  inicio = new Date('01-01-2022').toISOString();

  fin = new Date().toISOString();

  data:any;
  pdv:any;
  http: any;

  term:any;

  users: userConfig[] = [];


  constructor(private route: Router,private popoverController: PopoverController, private getHistoricoVendedores: GetHistoricoVendedoresService, public alertCtrl: AlertController,private store: Store<AppState>) {

    this.store.select('userConfig').subscribe(({ users }) => {
    this.users = users;
  }); }

  ngOnInit() {}

  async cerrar() {

    await this.popoverController.dismiss();
  }


  async cerrar2() {

    await this.popoverController.dismiss();
  }


  async consultar(inicio: any, fin: any) {
    // console.log("ini", inicio,fin)
    // let texto: string

    let inicio1: string = (inicio.substring(0, 10));
    let fin1: string = (fin.substring(0, 10));



    console.log("ini", inicio1)
    console.log("fin", fin1)

    localStorage.setItem("inicio_detalle",inicio1)
    localStorage.setItem("fin_detalle",fin1)


    const params = {
      inicio: inicio1,
      fin: fin1

    }

    await this.getHistoricoVendedores.GetHistoricoVendedores(params).then(async resp => {

      //  console.log("la resp es:", resp)
      this.data = resp.data;


    console.log("la resp es:", this.data)


    if(this.data==false){
      const alert = await this.alertCtrl.create({
        header: 'No hay registros en el rango de fechas seleccionado.',
        // subHeader: 'SubTitle',  
        // message: 'This is an alert message',  
        buttons: ['OK']
      });
      await alert.present();


    }
    else{
      this.data;
    }

      
      
    });



  }




  detalle(vendedor:any){
    console.log("VENDEDOR",vendedor)

    localStorage.setItem("vendedor_detalle",vendedor)



    this.route.navigate(['/sims-vendedor-detalle']);

  }





}
