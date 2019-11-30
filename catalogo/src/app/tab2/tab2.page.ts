import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ShareService } from '../pages/share/share';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items = [];
  idproducto:string;
  nombre:string;
  descripcion:string;
  precio:string;
  presentacion:string;
  marca:string;
  componentes: Componente[] = [
    {
      icon: 'home', 
      name: 'azul',
      redirectTo: '/login'

    }
  ];

  constructor( private menuCtrl: MenuController, public share:ShareService,public toastController: ToastController ) { 
    this.getAll();
  }
  getAll(){
    this.items=[];
    this.share.getAll().subscribe(data=>{
      for(var i=0;i<data.length;i++){
        this.items.push(data[i]);
      }
    })
  }
  Add(){

    if(this.idproducto==null){
      
    this.share.Create(this.nombre,this.descripcion,this.precio,this.idproducto).subscribe(data=>{
      this.nombre="";
      this.descripcion="";
      this.precio="";
      this.idproducto="";
      this.getAll();
    })
  }else{
      let presentToast= async() =>{

    const toast = await this.toastController.create({
      message: 'Ese producto ya existe',
      duration: 2000
    });
    toast.present();
  }
  presentToast();
 }
  }
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
