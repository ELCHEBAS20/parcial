import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-respuestos',
  templateUrl: './formulario-respuestos.component.html',
  styleUrls: ['./formulario-respuestos.component.css']
})
export class FormularioRespuestosComponent implements OnInit {

  public formmain: any = [];

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.FunctionCreateForm();
  }

  public FunctionCreateForm(): void {

    this.formmain = this.formBuilder.group({
      idRepuesto: ['', Validators.required],
      valor: ['', Validators.required],
      tipo: ['', Validators.required],
      Vehiculo: ['', Validators.required]
    })
  }
}
