import { Component, OnInit } from '@angular/core';
import { AppConsumoService } from '../../Config/Services/app-consumo.service';

@Component({
  selector: 'app-Repuestos',
  templateUrl: './Repuestos.component.html',
  styleUrls: ['./Repuestos.component.css']
})
export class RepuestosComponent implements OnInit {

  public displayColumns: string[] = [];
  public dataSource: any[] = [];
  public StrlPlacelholder: string = 'Repuestos';

  constructor(public ServicesConsumo: AppConsumoService) { }

  ngOnInit() {
    this.function_Consumo_inicial();
  }

  public function_Consumo_inicial() {
    this.ServicesConsumo.function_GET('Repuestoes').subscribe((resp: any) => {
      let objKey = Object.keys(resp[0]);
      this.displayColumns = objKey;
      this.dataSource = resp;
    })
  }

}
