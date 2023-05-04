import { Component, OnInit } from '@angular/core';
import { AppConsumoService } from '../../Config/Services/app-consumo.service';


@Component({
  selector: 'app-Vehiculos',
  templateUrl: './Vehiculos.component.html',
  styleUrls: ['./Vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  public displayColumns: string[] = [];
  public dataSource: any[] = [];
  public StrlPlacelholder = 'Vehiculos';

  constructor(public httpcliente: AppConsumoService) { }

  public strlvalor = 'Hola mundo';

  ngOnInit() {
    this.function_GET();

  }

  public function_GET() {
    this.httpcliente.function_GET('Vehiculoes').subscribe((resp: any) => {
      let objKey = Object.keys(resp[0]);
      this.displayColumns = objKey;
      this.dataSource = resp;
    })
  }

}
