import { Component, OnInit } from '@angular/core';
// import { backend } from '../../../axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  Correo: string;
  Clave: string;

  constructor() { }

  login(): void {
    console.log(this.Correo);
    console.log(this.Clave);
    /* backend.post('usuarios', {
      nombre_usuario: 'seba'
    })
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
      */
  }
  ngOnInit(): void {
  }
}
