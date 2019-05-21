import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  componentes: Componente[] = [
    {
      icon: 'home', 
      name: 'azul',
      redirectTo: '/login'

    }
  ];

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
  }

  toggleMenu(){
     this.menuCtrl.toggle();
  }

  }
  interface Componente {
    icon:string;
    name:string;
    redirectTo:string;

}
