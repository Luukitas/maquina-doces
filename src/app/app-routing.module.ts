import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaquinaComponent } from './maquina/maquina.component';

const routes: Routes = [
  {"path": "", "component": MaquinaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
