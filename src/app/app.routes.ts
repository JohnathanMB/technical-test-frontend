import { Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { DetailsComponent } from "./details/details.component";
import {ClientInformationComponent} from "./client-information/client-information.component";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login page'
  },
  {
    path: 'clients',
    component: ClientInformationComponent,
    title: 'Client details'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Client details'
  }
];
