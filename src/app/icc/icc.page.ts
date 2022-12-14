import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExportIccService} from '../services/export-icc.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icc',
  templateUrl: './icc.page.html',
  styleUrls: ['./icc.page.scss'],
})
export class IccPage implements OnInit {
  data: any;
  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';


  nombre:any;
  apellido:any;
  icc_global:any;

   constructor( private Exportservice:ExportIccService, private http: HttpClient) { }
  //  constructor( ) { }

  ngOnInit() {
  }


  exportexcel(): void {
    // console.log("tipo", typeof (this.userList))
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }


  subir(){
console.log("aqui")




  }

  async fileUpload(event:any){
    // console.log(event.target.files);

    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event:any) => {
      // console.log(event);

      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData,{type:'binary'});
      workbook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log("data a enviar a serv",data)

        this.data = data;

        console.log("this data",this.data)

        localStorage.setItem("icc_global",this.icc_global)



        


      })

      

      
      // console.log(workbook)
    }

this.data = {nombre:"wew", apellido: "dmdmd", icc:"123"}
    
    let data2 = {
       data:[{nombre:"wew", apellido: "dmdmd", icc:"123"}
    ]}
    
    console.log(data2)

    await this.Exportservice.InsertICC(data2).then(respuesta =>  {
      console.log(data2)
      console.log(respuesta)
    

  });



  }


}
