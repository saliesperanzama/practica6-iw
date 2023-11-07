import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
     
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    if(this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Datos incompletos',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    var nombre = "sandra";
    var password = "pasale123";

    if(f.nombre != nombre || f.password != password){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrecta',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }else{
      // Llama la pantalla de tab1
      this.router.navigate(['/tabs/tab1']);
    }
  }
}
