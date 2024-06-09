import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefinicoesCalculoPage } from './definicoes-calculo.page';

const routes: Routes = [
  {
    path: '',
    component: DefinicoesCalculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinicoesCalculoPageRoutingModule {}
