import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInformationComponent } from '../client-information/client-information.component';
import { Client } from '../client';
import { ClientService} from "../client.service";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { SeparetorDirective } from "../separetor.directive";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ClientInformationComponent,
    ReactiveFormsModule,
    SeparetorDirective
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  clients: Client[] = [];
  filteredClients: Client[] = [];
  clientService: ClientService = inject(ClientService);

  searchClientForm = new FormGroup({
    idType: new FormControl(''),
    idNumber: new FormControl('')
  })

  constructor(private router: Router) {
    this.clients = this.clientService.getAllClients();
    this.filteredClients = this.clients;
  }

  submitClient(){

    let idType = this.searchClientForm.value.idType ?? '';
    let idNumber = String(this.searchClientForm.value.idNumber ?? '').replaceAll(",","")
    let clientId = idType.concat("-").concat(idNumber)
    this.router.navigate([`/details/${clientId}`])
  }
}
