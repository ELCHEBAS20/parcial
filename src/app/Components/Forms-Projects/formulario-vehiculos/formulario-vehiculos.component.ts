import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-vehiculos',
  templateUrl: './formulario-vehiculos.component.html',
  styleUrls: ['./formulario-vehiculos.component.css']
})
export class FormularioVehiculosComponent implements OnInit {

  public formmain: any = [];

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.functionFormCreate();
  }

  protected functionFormCreate() {
    this.formmain = this.formBuilder.group({
      idVehiculo: ['', Validators.required],
      Marca: ['', Validators.required],
      Color: ['', Validators.required],
      Modelo: ['', Validators.required],
      Placa: ['', Validators.required]
    })
  }
}
