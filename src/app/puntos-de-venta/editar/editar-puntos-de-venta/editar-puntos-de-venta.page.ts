import { Component, OnInit } from '@angular/core';
import { GetPuntoDeVentaIdService } from '../../../../app/services/get-punto-de-venta-id.service';
import { UpdateEditarPuntosDeVentaIdService } from 'src/app/services/update-editar-puntos-de-venta-id.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-puntos-de-venta',
  templateUrl: './editar-puntos-de-venta.page.html',
  styleUrls: ['./editar-puntos-de-venta.page.scss'],
})
export class EditarPuntosDeVentaPage implements OnInit {



  constructor(private GetPuntoDeVentaId: GetPuntoDeVentaIdService, private updateEditarPuntosDeVentaId: UpdateEditarPuntosDeVentaIdService,private alertCtrl: AlertController,private route: Router) { }

  idpunto_venta:any;
  respuesta:any;
  data:any;
  nombre:any;
  giro:any;
  email:any;



  apellido:any;
  domicilio:any;
  dueno:any;
  telefono1:any;
  telefono2:any;
  vendedor:any;




  



  ngOnInit(){

  }




 async ionViewWillEnter() {



  this.idpunto_venta= localStorage.getItem("idpunto_venta")
  // console.log(this.idpunto_venta)

  let params ={idpunto_venta: Number(this.idpunto_venta)}

  // console.log(params)



 await this.GetPuntoDeVentaId.GetPuntosDeVentaId(params).then((respuesta) => {
    console.log('resp', respuesta);

    this.data = respuesta.data;



    this.nombre=this.data[0].nombre;
    this.giro=this.data[0].giro;
    this.email=this.data[0].email;



    this.apellido=this.data[0].apellido;
    this.domicilio=this.data[0].domicilio;
    this.dueno=this.data[0].dueno;
    this.telefono1=this.data[0].telefono1;
    this.telefono2=this.data[0].telefono2;
    this.vendedor=this.data[0].vendedor;





    





  })
  .catch((error) => {
    /* Código a realizar cuando se rechaza la promesa */
    console.log('NO paso chido', error);
  });












  }






 async editar(nombre:any,apellido:any,domicilio:any,dueno:any,email:any,giro:any,telefono1:any,telefono2:any,vendedor:any,idpunto_venta:any){

    console.log(nombre,apellido,domicilio,dueno,email,giro,telefono1,telefono2,vendedor,idpunto_venta)


             
    const params = {
      data: [{ nombre:nombre,apellido:apellido,domicilio:domicilio,dueno:dueno,email:email,giro:giro,telefono1:telefono1,telefono2:telefono2,vendedor:vendedor,idpunto_venta:idpunto_venta }]
                  }



    await this.updateEditarPuntosDeVentaId.UpdatePuntoDeVentaID(params).then(async (respuesta) => {
      console.log('resp', respuesta);




      if (respuesta.status === "000") {
                        // alert("Carga realizada con éxito.");
                        const alert = await this.alertCtrl.create({  
                          header: 'Registro editado con éxito.',  
                          // subHeader: 'SubTitle',  
                          // message: 'This is an alert message',  
                          buttons: ['OK']  
                        });  
                        await alert.present();  
                        
    
                        
                        setTimeout(() => {
                          this.route.navigate(['/puntos-de-venta']);
                        }, 3000);
                        
                    
                        
                      }
                      else {
                        // alert("Carga realizada con éxito.");
                        const alert = await this.alertCtrl.create({  
                          header: 'Error al registrar.',  
                          // subHeader: 'SubTitle',  
                          // message: 'This is an alert message',  
                          buttons: ['OK']  
                        });  
                        await alert.present();  
    
                        // this.ngOnInit();
                      }
                    
                    











  
  
  
    })
    .catch((error) => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log('NO paso chido', error);
    });
  
  
  
  
  
  
  
  








  }

}
