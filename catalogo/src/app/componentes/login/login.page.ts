import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/pages/share/share';
import { ToastController } from '@ionic/angular';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [ShareService]
})
export class LoginPage implements OnInit {
  userName:string;
  passWord:string;

  constructor(public share:ShareService, public toastController: ToastController, private router: Router) { }
 
  ngOnInit() {
  }
 
  signin(){


    this.share.login(this.userName,this.passWord).subscribe(data=>{
      async function presentToast() {
    
      if(data==null){
  
        const toast = await this.toastController.create({
          message: 'Usuario/clave incorrecto',
          duration: 2000
        });
        toast.present();
        
      }else{
        this.router.navigate('/tab1');
        
      
      }
    }
    });

  
}
}

 

