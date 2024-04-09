import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinicoesPageRoutingModule } from './definicoes-routing.module';

import { DefinicoesPage } from './definicoes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinicoesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DefinicoesPage]
})
export class DefinicoesPageModule {}
