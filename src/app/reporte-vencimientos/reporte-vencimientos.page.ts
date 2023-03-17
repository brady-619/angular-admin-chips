import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
 import { GetListadoVencimientosService } from '../../app/services/get-listado-vencimientos.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {AfterViewInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';



export interface PeriodicElement {
  ICCI: string;
  DN: string;
  VENDEDOR: string;
  COMPANIA: string;
  ESTATUS: string
  CADUCIDAD: string;
  HOY: string;
  DIAS: string;
}

@Component({
  selector: 'app-reporte-vencimientos',
  templateUrl: './reporte-vencimientos.page.html',
  styleUrls: ['./reporte-vencimientos.page.scss'],
})
export class ReporteVencimientosPage implements OnInit {
  data: any;
  dataSource = new MatTableDataSource < PeriodicElement > ();


  displayedColumns: string[] = ['ICCI', 'DN', 'VENDEDOR', 'COMPANIA', 'ESTATUS', 'CADUCIDAD', 'HOY','DIAS','options'];

  constructor(private _liveAnnouncer: LiveAnnouncer,private router: Router, public alertCtrl: AlertController,private listadovencimientos: GetListadoVencimientosService, private alertController: AlertController) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }


  ngOnInit() {
  }


 async ionViewWillEnter(){
    console.log("c llama");
    localStorage.setItem("vendedor",'')
    
    // window.location.reload();

    await this.listadovencimientos.GetListadoVencimientos().then(async respuesta => {
      console.log("bna",respuesta);
      this.data = respuesta.data
      let ELEMENT_DATA: PeriodicElement[] = respuesta.data
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      // this.dataSource = ELEMENT_DATA;
  
      // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource.paginator)
      // console.log(this.paginator)
  
  
  
  
  
  
    });
  }


  async ngAfterViewInit() {

    






  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   localStorage.setItem("vendedor",this.dataSource.filter )






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




exportar(){
  
  let vendedor= localStorage.getItem("vendedor")
  console.log("El val a exportar es:", vendedor);
  

  }



}
