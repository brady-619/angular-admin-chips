import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { GetHistoricoPdvService } from '../services/get-historico-pdv.service'; 



@Component({
  selector: 'app-sims-pdv',
  templateUrl: './sims-pdv.page.html',
  styleUrls: ['./sims-pdv.page.scss'],
})
export class SimsPdvPage implements OnInit {

  inicio = new Date('01-01-2023').toISOString();

  fin = new Date().toISOString();

  data:any;
  pdv:any;
  http: any;

  term:any;

  

  constructor(private popoverController: PopoverController, private getHistorico: GetHistoricoPdvService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

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

    const params = {
      inicio: inicio1,
      fin: fin1

    }

    await this.getHistorico.GetHistoricoPdv(params).then(async resp => {

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




}
