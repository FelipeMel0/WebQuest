import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinicoesCalculoPageRoutingModule } from './definicoes-calculo-routing.module';

import { DefinicoesCalculoPage } from './definicoes-calculo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinicoesCalculoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DefinicoesCalculoPage]
})
export class DefinicoesCalculoPageModule {}
