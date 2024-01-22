import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../client';
import { RouterModule, Router } from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ClientService} from "../client.service";

@Component({
  selector: 'app-client-information',
  standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
  templateUrl:'./client-information.component.html',
  styleUrl: './client-information.component.css'
})
export class ClientInformationComponent {

  clients: Client[] = [];
  clientService: ClientService = inject(ClientService);

  constructor(private router: Router) {
    this.clients = this.clientService.getAllClients();
  }

  goLogin(){
    this.router.navigate(["/"])
  }
}
