import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './Components/Repuestos/Repuestos.component';
import { VehiculosComponent } from './Components/Vehiculos/Vehiculos.component';
import { MENUComponent } from './Components/menu/menu.component';
import { FormularioRespuestosComponent } from './Components/Forms-Projects/formulario-respuestos/formulario-respuestos.component';
import { FormularioVehiculosComponent } from './Components/Forms-Projects/formulario-vehiculos/formulario-vehiculos.component';


const routes: Routes = [

  { path: 'Repuestos', component: RepuestosComponent },
  { path: 'Vehiculos', component: VehiculosComponent },
  { path: 'Menu', component: MENUComponent },
  { path: 'Form-Repuestos', component: FormularioRespuestosComponent },
  { path: 'Form-Vehiculos', component: FormularioVehiculosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
