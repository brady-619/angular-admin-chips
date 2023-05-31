import { Component, OnInit } from '@angular/core';
import { GetPuntoDeVentaIdService } from '../../../../app/services/get-punto-de-venta-id.service';

@Component({
  selector: 'app-editar-puntos-de-venta',
  templateUrl: './editar-puntos-de-venta.page.html',
  styleUrls: ['./editar-puntos-de-venta.page.scss'],
})
export class EditarPuntosDeVentaPage implements OnInit {



  constructor(private GetPuntoDeVentaId: GetPuntoDeVentaIdService) { }

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




  ionViewWillEnter() {



  this.idpunto_venta= localStorage.getItem("idpunto_venta")
  // console.log(this.idpunto_venta)

  let params ={idpunto_venta: Number(this.idpunto_venta)}

  // console.log(params)



  this.GetPuntoDeVentaId.GetPuntosDeVentaId(params).then((respuesta) => {
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

}
