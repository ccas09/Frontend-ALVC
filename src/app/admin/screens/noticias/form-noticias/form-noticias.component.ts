import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iNews } from 'src/app/models/news.model';

@Component({
  selector: 'form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.less'],
})
export class FormNoticiasComponent implements OnInit {
  form: FormGroup;
  @Output() onSubmit: EventEmitter<number> = new EventEmitter();

  @Input()
  public noticiaInicial: iNews;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void { 
      console.log(this.noticiaInicial)

    this.form = this.fb.group({
      titleCard: ['', Validators.required],
      body: ['', Validators.required],
      image: ['', Validators.required],
      date: ['', Validators.required],
      journalist: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  public formulario() {
    const user = this.form.value;
    console.log(user);
  }

  enviar(event) {
    event.preventDefault()
    const noticia = this.form.value;
    this.onSubmit.emit(noticia);
  }
}
