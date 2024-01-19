import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from "../../core/core.module";
import { TerminalComponent } from './terminal/terminal.component';
import { TablaModule } from 'src/app/core/components/tabla/tabla/tabla.module';


const routes: Routes = [
  { path: '', component: TerminalComponent },
];

@NgModule({
    declarations: [
        TerminalComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CoreModule,
        TablaModule,
    ]
})
export class TerminalModule { }