import { Component, OnInit } from '@angular/core';
import { GetPuntosDeVentaService } from '../../app/services/get-puntos-de-venta.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {ViewChild} from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Router } from '@angular/router';



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



  constructor(private router: Router,private getPuntosDeVenta: GetPuntosDeVentaService,private _liveAnnouncer: LiveAnnouncer) {}


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  data: any;
  dataSource = new MatTableDataSource <PeriodicElement> ();

  ngOnInit() {

    
    this.getPuntosDeVenta.GetPuntosDeVenta().then((respuesta) => {
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
  



  eliminar(idpunto_venta:any){
    console.log("del",idpunto_venta )

  }
  




}
