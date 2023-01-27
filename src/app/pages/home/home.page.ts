import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private route: Router, private menu:MenuController) {}


  

  proveedores(){
    this.menu.toggle()
    this.route.navigate(['/proveedores']);
  }


  icc(){
    this.menu.toggle()
    this.route.navigate(['/icc']);
  }


  bait(){
    this.menu.toggle()
    this.route.navigate(['/bait']);
  }


  vendedores(){
    this.menu.toggle()
    this.route.navigate(['/vendedores']);
  }

  estatus(){
    this.menu.toggle()
    this.route.navigate(['/estatus']);
  }
  salir(){
    this.menu.toggle()
    this.route.navigate(['/login']);
    localStorage.removeItem('ingresado')
  }
  actualizaVendedor(){
    this.menu.toggle()
    this.route.navigate(['/actualiza-vendedor']);
  }
  eliminaRegistro(){
    this.menu.toggle()
    this.route.navigate(['/elimina-registro']);
  }

  existencias(){
    this.menu.toggle()
    this.route.navigate(['/existencias-por-vendedor']);
  }

  simspdv(){
    this.menu.toggle()
    this.route.navigate(['/sims-pdv']);
  }

  simsvendedor(){
    this.menu.toggle()
    this.route.navigate(['/sims-vendedor']);
  }
}
