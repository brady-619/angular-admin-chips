import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AlertController, NavController } from '@ionic/angular';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { userConfig } from '../models/userconfig.model';

import { userConfigActions } from '../store/actions/userconfig.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  users: userConfig[] = [];

tel:any;
pass:any


  constructor( private store: Store<AppState>,public navCtrl: NavController ,public alertCtrl: AlertController,private router: Router, private login: LoginService) { 

    this.store.select('userConfig').subscribe(({ users }) => {
      this.users = users;
    });

  }

  loginForm = new FormGroup({
    telefono: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('')
  });

  ngOnInit() {
  }


  get registerFormControl() {
    return this.loginForm.controls;
  }


  async inicio(){

    console.log("click")







    if(this.loginForm.value.telefono !='' || this.loginForm.value.password !='')
    {
      const params=this.loginForm.value
      // console.log("params env",params)

      this.tel= this.loginForm.value.telefono
      this.pass=this.loginForm.value.password
      

      const config = new userConfig(this.tel, this.pass);
      console.log("valores enviados al store:", this.pass)
      this.store.dispatch(userConfigActions.SetUserConfig({ config }));




      await this.login.Login(params).then(async respuesta=>{
      // console.log("la resp del serv es:",respuesta);
      // console.log("la resp del nomb es:",respuesta.data[0].nombre);





      
      if (respuesta.status=='000'){

        // this.nombre = respuesta.data[0].nombre;

        // console.log("nombre", this.nombre)
        /*global*/
        // localStorage.setItem("nombre_global",this.nombre)
  
  
  
        // this.idclientes = respuesta.data.idclientes;
        /*global*/
        // localStorage.setItem("idclientes_global",this.idclientes)

        // this.router.navigate(['/home'])

localStorage.setItem('ingresado','true');
this.navCtrl.navigateRoot('home');



      }
      else{

        // alert("usuario no registrado")
        // localStorage.setItem("nombre_global","")
        /*global*/
        // localStorage.setItem("idclientes_global","")
        const alert = await this.alertCtrl.create({  
          header: 'Usuario no registrado o inactivo.',  
          // subHeader: 'SubTitle',  
          // message: 'This is an alert message',  
          buttons: ['OK']  
        });  
        await alert.present();  

      }
    
      });
    

      
      }
      else{
        alert("Favor de llenar todos los campos")

      }

    }

}

