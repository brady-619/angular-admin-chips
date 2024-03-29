import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertBaitService } from '../services/insert-bait.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bait',
  templateUrl: './bait.page.html',
  styleUrls: ['./bait.page.scss'],
})
export class BaitPage implements OnInit {



  payload: any;
  filename: string = "";
  loading: boolean = false;




  arrayBuffer: any;
  file: any;
  incomingfile(event: any) {
    this.file = event.target.files[0];
  }



  constructor(private http: HttpClient, private updateBait: InsertBaitService,public alertCtrl: AlertController) { }

  ngOnInit() {
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





  getPayload(data: any) {
    // console.log("data:",data)
    let tmp = []
    for (let i of data) {
      let items = i.split(',')
      // console.log("items:",items)
      if (items[0] == undefined || items[1] == undefined || items[2] == undefined || items[3] == undefined) {
        console.log("no valido")
      } else {
        tmp.push({ ICCI: items[0], DN: items[1], FECHA: items[2], CADUCIDAD: items[3] })
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

    console.log("data2", data2)


    await this.updateBait.UpdateBait(data2).then(async respuesta => {
      console.log(data2)
      console.log("paso chido", respuesta)


      if (respuesta.status = "000") {
        // alert("Carga realizada con éxito.")
        const alert = await this.alertCtrl.create({  
          header: 'Actualzación creada con éxito.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  
      }
      else {
        // alert("Error en carga.")
        const alert = await this.alertCtrl.create({  
          header: 'Error en carga.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  
      }



    }).catch(async error => {
      /* Código a realizar cuando se rechaza la promesa */
      // console.log("NO paso chido", error)
      const alert = await this.alertCtrl.create({  
        header: 'Error en carga.',  
        // subHeader: 'SubTitle',  
        // message: 'This is an alert message',  
        buttons: ['OK']  
      });  
      await alert.present();  
    });











  }







}
