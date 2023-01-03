import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {
 
  constructor(public navCtrl:NavController){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    if(localStorage.getItem('ingresado')){

      this.navCtrl.navigateRoot('home');
      return false;
    }else{
      this.navCtrl.navigateRoot('login');
      return true;
    }
  }
  
}
