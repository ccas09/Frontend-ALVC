import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { backend } from '../../../axios';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  formularioRegistrar: FormGroup;
  constructor(private fb: FormBuilder) {}
  // nombreDeUsuario: string;
  // contraseña: string;

  ngOnInit(): void {
    this.formularioRegistrar = this.fb.group({
      correo: ['', Validators.required, Validators.email],
      nombre_usuario: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      password: [
        '',
        [
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
          ]),
        ],
      ],
    });
  }

  public Register(): void {
    const user = this.formularioRegistrar.value;
    console.log(user);
    backend.post('usuarios', user)
      .then(resp => {
        // TODO: Redireccionar alguna ruta
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
