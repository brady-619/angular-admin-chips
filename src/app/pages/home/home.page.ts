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




}
