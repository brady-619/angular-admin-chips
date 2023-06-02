import { Component, OnInit } from '@angular/core';
import { GetPuntosDeVentaService } from '../../app/services/get-puntos-de-venta.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {ViewChild} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeletePuntoDeVentaIdService } from '../../app/services/delete-punto-de-venta-id.service';



export interface PeriodicElement {

  nombre: string;
}

@Component({
  selector: 'app-puntos-de-venta',
  templateUrl: './puntos-de-venta.page.html',
  styleUrls: ['./puntos-de-venta.page.scss'],
})
export class PuntosDeVentaPage implements OnInit {



  displayedColumns: string[] = ['nombre','domicilio','dueno','options'];



  constructor(public alertCtrl: AlertController,private router: Router,private getPuntosDeVenta: GetPuntosDeVentaService,private _liveAnnouncer: LiveAnnouncer, private deletePuntoVentaId: DeletePuntoDeVentaIdService ) {}


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  data: any;
  dataSource = new MatTableDataSource <PeriodicElement> ();

  ngOnInit() {
  }




  async ionViewWillEnter(){
  await  this.getPuntosDeVenta.GetPuntosDeVenta().then((respuesta) => {
      console.log('resp', respuesta);

      this.data = respuesta.data;

      this.data = respuesta.data
  let ELEMENT_DATA: PeriodicElement[] = respuesta.data
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  // this.dataSource = ELEMENT_DATA;

  // this.dataSource = new MatTableDataSource(ELEMENT_DATA);


  console.log(this.dataSource)
  this.dataSource.paginator = this.paginator;
  // console.log(this.dataSource.paginator)
  // console.log(this.paginator)






    })
    .catch((error) => {
      /* Código a realizar cuando se rechaza la promesa */
      console.log('NO paso chido', error);
    });


  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    console.log("mueve", sortState)
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }



  editar(idpunto_venta:any){
    // console.log("ed",idpunto_venta )
    localStorage.setItem("idpunto_venta",idpunto_venta)

    /*obteniendo store para inicializar*/
          this.router.navigate(['editar-puntos-de-venta']);



  }
  



  async eliminar(idpunto_venta:any, nombre:any){
    // console.log("del",idpunto_venta)



 const request = {
  idpunto_venta: idpunto_venta
              }



              const alert = await this.alertCtrl.create({
                header: 'AVISO, seguro que deseas ELIMINAR el punto de venta ' + nombre + '?' ,
                // subHeader: 'ICC:' +  sims  + '   al P.V:'  + this.pv,
                // message:
                //   '<b>ICC:</b><br/>' +
                //   ICCI +
                //   '   <br/><b>al PDV: </b><br/>' +
                //   this.pv +
                //   '   <br/><b>de compañia: </b><br/>' +
                //   COMPANIA,
                buttons: [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                      console.log('Confirm Cancel');
                    },
                  },
                  {
                    text: 'Ok',
                    // handler: (alertData) => { //takes the data
                    //     console.log(alertData.name1);
                    // }
                    handler: async (alertData) => {
                      console.log('Se manda el borrado ');
          

                      // this.on = true;


                      
          
                      const params = {
                        data: [{ idpunto_venta: idpunto_venta }]
                                    }


                                   
          
                      // console.log("para", params)
          
                      await this.deletePuntoVentaId.DeletePuntoDeVentaID(params).then(async (resp) => {
                          console.log("resp", resp)
          

                      
          
                          const alert = await this.alertCtrl.create({
                            header: 'Registro eliminado con éxito.',
                            // subHeader: 'SubTitle',
                            // message: 'This is an alert message',
                            buttons: ['OK'],
                          });
                          await alert.present();


              setTimeout(function(){location.reload()}, 3000);

          
                          // this.on = false;

          
                          // this.sims = resp.data;
                        })
                        .catch(async (error) => {
                          /* Código a realizar cuando se rechaza la promesa */
                          console.log('NO paso chido', error);
          
                          const alert = await this.alertCtrl.create({
                            header: 'Error en red.',
                            // subHeader: 'SubTitle',
                            // message: 'This is an alert message',
                            buttons: ['OK'],
                          });
                          await alert.present();
                        });
                    },
                  },
                ],
              });
          
              await alert.present();






              




  }
  




}
