import { NgModule } from '@angular/core';
import { ReferenciasMaterialModule } from './modules/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { TablaModule } from './components/tabla/tabla/tabla.module';


@NgModule({
  declarations: [
  ],
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    TablaModule,
  ]
})
export class CoreModule { }