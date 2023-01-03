import { Component, OnInit } from '@angular/core';
import { GetVendedoresService} from '../services/get-vendedores.service';
import { InsertVendedorService } from '../services/insert-vendedor.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.page.html',
  styleUrls: ['./vendedores.page.scss'],
})
export class VendedoresPage implements OnInit {

  data:any;
  payload: any;

  constructor(public alertCtrl: AlertController,private alertController: AlertController,private vendedores: GetVendedoresService,private http: HttpClient, private insertvendedores: InsertVendedorService) { }


  async ngOnInit() {

    await this.vendedores.GetVendedores().then(resp =>  {
      
      console.log("resp",resp)

      this.data = resp.data;

      }).catch(error=> {
        /* Código a realizar cuando se rechaza la promesa */
        console.log("NO paso chido",error)
      });
  
  
  
  
  
  
  
  
  
  }


  async nuevo() {

 

    const alert = await this.alertController.create({
      header: 'Alta de vendedor',
      // buttons: ['Guardar','Cancelar'],
      buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
        }, 
        {
            text: 'Ok',
            handler: async (alertData) => { //takes the data 
              console.log("SIM vendida");
                console.log("El valor de venta enviado sera",
                alertData.nombre, 
                alertData.telefono, 
                alertData.direccion, 
                alertData.correo, 
                alertData.password,
                alertData.fecha_ingreso,
                );



           
                let data2 = {
                  //  data:[{nombre:this.data.nombre , apellido: this.data.apellido, icc:this.data.icc}
                  data: [{ nombre: alertData.nombre, telefono: alertData.telefono,direccion: alertData.direccion,correo: alertData.correo,password: alertData.password,fecha_ingreso: alertData.fecha_ingreso}]
                }
            
                console.log("data2", data2)
            
            
                await this.insertvendedores.InsertVendedor(data2).then(async respuesta => {
                  console.log(data2)
                  console.log("paso chido", respuesta)
                
                

                  if (respuesta.status = "000") {
                    // alert("Carga realizada con éxito.");
                    const alert = await this.alertCtrl.create({  
                      header: 'Registro creado con éxito.',  
                      // subHeader: 'SubTitle',  
                      // message: 'This is an alert message',  
                      buttons: ['OK']  
                    });  
                    await alert.present();  

                    this.ngOnInit();
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
                
                
                
                
                });
            
                


            }
        }
    ],
      inputs: [
        {
          type: 'text',
          name: 'nombre',
          placeholder: 'nombre',
          
        },
        {
          type: 'text',
          name: 'telefono',
          placeholder: 'telefono',
        },
        {
          type: 'text',
          name: 'direccion',
          placeholder: 'direccion',
        },
        {
          type: 'text',
          name: 'correo',
          placeholder: 'correo',
        },
        {
          type: 'text',
          name: 'password',
          placeholder: 'password',
        },
        {
          type: 'date',
          name: 'fecha_ingreso',
          placeholder: 'fecha ingreso',
        }
      ],
    });




    await alert.present();
  }



  async editar(nombre:any, password:any) {

 

    console.log("Aqui", nombre)
    console.log("Aqui", password)

    const alert = await this.alertController.create({
      header: 'Actualizar vendedor',
      // buttons: ['Guardar','Cancelar'],
      buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
        }, 
        {
            text: 'Ok',
            handler: (alertData) => { //takes the data 
              // console.log("SIM vendida",sim);
                console.log("El valor de venta enviado sera",alertData.nombre, alertData.password);
            }
        }
    ],
      inputs: [
        // {
        //   placeholder: 'SIM',
        //   value: sim
        // },
        {
          type: 'text',
          name: 'nombre',
          value: nombre,
          placeholder: 'Nombre',
        },
        {
          type: 'text',
          name: 'password',
          value: password,
          placeholder: 'Nombre',
        },
      ],
    });




    await alert.present();
  }


}
