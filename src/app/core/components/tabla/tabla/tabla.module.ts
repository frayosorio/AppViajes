import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { ReferenciasMaterialModule } from 'src/app/core/modules/referencias-material.module';
import { TablaComponent } from './tabla.component';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    ReferenciasMaterialModule,
    RouterModule,
  ],
  exports: [
    TablaComponent
  ],
  providers: [
    //MenuNavigationService
  ]
})
export class TablaModule { }