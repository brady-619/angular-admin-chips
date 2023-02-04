import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AlertController, NavController } from '@ionic/angular';
// 3ngrx
import { Store } from '@ngrx/store';
import { loadedItems, loadItems } from 'src/app/state/actions/items.actions';
import { selectLoading } from 'src/app/state/selector/items.selectors';
import { observable, Observable } from 'rxjs';
import { ItemModel } from '../core/models/item.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading$: Observable<boolean> = new Observable();

  constructor(public navCtrl: NavController ,public alertCtrl: AlertController,private router: Router, private login: LoginService,
    private store: Store<any>) { }

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



 
      this.loading$ = this.store.select(selectLoading);
  
      this.store.dispatch(loadItems())
  
      
  











    console.log("click")


    if(this.loginForm.value.telefono !='' || this.loginForm.value.password !='')
    {
      const params=this.loginForm.value
      // console.log("params env",params)

      await this.login.Login(params).then(async (respuesta: ItemModel[])=>{
      // console.log("la resp del serv es:",respuesta);
      // console.log("la resp del nomb es:",respuesta.data[0].nombre);


// await this.login.Login(params)((response: ItemModel[])=>{
 await this.store.dispatch(loadedItems({items:respuesta}));
  console.log('resp', respuesta);

  console.log('resp', respuesta);
      
//       if (respuesta.status=='000'){

//         // this.nombre = respuesta.data[0].nombre;

//         // console.log("nombre", this.nombre)
//         /*global*/
//         // localStorage.setItem("nombre_global",this.nombre)
  
  
  
//         // this.idclientes = respuesta.data.idclientes;
//         /*global*/
//         // localStorage.setItem("idclientes_global",this.idclientes)

//         // this.router.navigate(['/home'])

// localStorage.setItem('ingresado','true');
// this.navCtrl.navigateRoot('home');



//       }
//       else{

//         // alert("usuario no registrado")
//         // localStorage.setItem("nombre_global","")
//         /*global*/
//         // localStorage.setItem("idclientes_global","")
//         const alert = await this.alertCtrl.create({  
//           header: 'Usuario no registrado o inactivo.',  
//           // subHeader: 'SubTitle',  
//           // message: 'This is an alert message',  
//           buttons: ['OK']  
//         });  
//         await alert.present();  

//       }
    
      });
    

      
      }
      else{
        alert("Favor de llenar todos los campos")

      }

    }

}

