import { Component, OnInit } from '@angular/core';
import { AppConsumoService } from '../../Config/Services/app-consumo.service';


@Component({
  selector: 'app-Vehiculos',
  templateUrl: './Vehiculos.component.html',
  styleUrls: ['./Vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(public httpcliente: AppConsumoService) { }

  ngOnInit() {
    this.function_GET();
  }

  public function_GET() {
    return this.httpcliente.function_GET('Vehiculoes').subscribe((resp: any) => {
      console.log(resp);
    })
  }

}
