import { Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { DetailsComponent } from "./details/details.component";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Client details'
  }
];
