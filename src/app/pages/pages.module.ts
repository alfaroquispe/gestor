import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';


import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { GraficaDonaComponent } from './graficas1/grafica-dona/grafica-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medico/medico.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficaDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        ProfileComponent,
        UsuariosComponent,
        ModalUploadComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        CommonModule,
        BrowserModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]
})
export class PagesModule { }
