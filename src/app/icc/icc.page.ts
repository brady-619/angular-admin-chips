import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExportIccService} from '../services/export-icc.service'
import { HttpClient } from '@angular/common/http';
// import { ToastUtil } from '../../../utils/toast.util';
// import * as Constants from '../../../app.constants';

@Component({
  selector: 'app-icc',
  templateUrl: './icc.page.html',
  styleUrls: ['./icc.page.scss'],
})
export class IccPage implements OnInit {
  data: any;
  datap: any;
  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';
  


  payload: any;
  filename: string = "";
  loading: boolean = false;




  arrayBuffer:any;
file:any;
incomingfile(event:any) 
  {
  this.file= event.target.files[0]; 
  }


  nombre:any;
  apellido:any;
  icc_global:any;
  si:any;
  articulos:any;
  // private toast: ToastUtil
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
    fileReader.onload = async (event:any) => {
      // console.log(event);

      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData,{type:'binary'});
      
      workbook.SheetNames.forEach( async sheet => {
        const data =  XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log("data cont")
        // console.log("data a enviar a serv",data)

        this.data = data;

        console.log("data a enviar a serv data normal",this.data)

        // await localStorage.setItem("icc_global",this.icc_global)




        // this.datap = {nombre:"chido", apellido: "chido", icc:"chido"}
        // console.log("datap",this.datap)
    


        let data2 = {
          //  data:[{nombre:this.data.nombre , apellido: this.data.apellido, icc:this.data.icc}
            data: this.data 
          }
        
        console.log("data2",data2)
  
  
  
        await this.Exportservice.InsertICC(data2).then(respuesta =>  {
          console.log(data2)
          console.log("paso chido",respuesta)
          }).catch(error=> {
            /* Código a realizar cuando se rechaza la promesa */
            console.log(error)
          });




            

      })


      

   

      
      // console.log(workbook)
    }



        //     this.icc_global = await localStorage.getItem("icc_global")
        //     console.log("get icc", this.icc_global)

        // this.data = {nombre:"wew", apellido: "dmdmd", icc:"123"}
            
        //     let data2 = {
        //        data:[{nombre:"wew", apellido: "dmdmd", icc:"123"}
        //     ]}
            
        //     console.log(data2)

        //     await this.Exportservice.InsertICC(data2).then(respuesta =>  {
        //       console.log(data2)
        //       console.log(respuesta)
            

        //   });



  }


 async Upload() {
    let fileReader = new FileReader();
      fileReader.onload = async (e) => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, {type:"binary"});
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
          console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));

          this.data =  XLSX.utils.sheet_to_json(worksheet,{raw:true});

          let data2 = {
            //  data:[{nombre:this.data.nombre , apellido: this.data.apellido, icc:this.data.icc}
              data: this.data 
            }
          
          console.log("data2",data2)
    
    
    
          await this.Exportservice.InsertICC(data2).then(respuesta =>  {
            console.log(data2)
            console.log("paso chido",respuesta)
            }).catch(error=> {
              /* Código a realizar cuando se rechaza la promesa */
              console.log(error)
            });
  


      }
       fileReader.readAsArrayBuffer(this.file);




 }







 fileHandle(e: any) {
  // console.log(e.target)
  let input = e.target;
  let files = e.srcElement.files;
  let reader = new FileReader()
  reader.readAsText(input.files[0])
  this.filename = files.name;
  reader.onload = () => {
    let csvData = reader.result
    let data = (<string>csvData).split(/\r\n|\n/)
    //console.log(data)
    let dataInsert = data.slice(1,)
    // console.log(dataInsert)
    this.getPayload(dataInsert)

  }
  // console.log(files[0])
  this.filename = files[0].name;
}

getPayload(data:any) {
  // console.log("data:",data)
  let tmp = []
  for (let i of data) {
    let items = i.split(',')
    // console.log("items:",items)
    if (items[0] == undefined || items[1] == undefined || items[2] == undefined) {
      console.log("no valido")
    } else {
      tmp.push({ ICCI: items[0], DN: items[1], FECHA: items[2], VENDEDOR: items[3], CIUDAD: items[4], COMPANIA: items[5], CADUCIDAD: items[6]})
    }

  }
  this.payload = tmp
}

async createUsersMulti() {
  this.loading = true;
  // console.log(this.payload)
  // this.commonService.post(Constants.apiCreateEmpresasMasivo, { empresas: this.payload }).subscribe(resp => {
  //   console.log(resp)
  //   this.loading = false;
  //   if (resp.status === "000")
  //     this.toast.success("Las empresas se registraron correctamente.");
  //   else
  //     this.toast.error(resp.message)
  // });


  let data2 = {
    //  data:[{nombre:this.data.nombre , apellido: this.data.apellido, icc:this.data.icc}
      data: this.payload 
    }
  
  console.log("data2",data2)


  await this.Exportservice.InsertICC(data2).then(respuesta =>  {
    console.log(data2)
    console.log("paso chido",respuesta)
    }).catch(error=> {
      /* Código a realizar cuando se rechaza la promesa */
      console.log("NO paso chido",error)
    });








}







}
