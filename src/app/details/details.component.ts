import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'
import { ClientService } from "../client.service";
import { Client } from "../client";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  private readonly _strings = "-";

  route: ActivatedRoute = inject(ActivatedRoute);
  clientService: ClientService = inject(ClientService);
  client: Client | undefined;

  clientId = "";

  constructor() {
    this.clientId = String(this.route.snapshot.params['id'])

    var idType = this.clientId.split(this._strings)[0];
    var idNumber = this.clientId.split(this._strings)[1];

    this.client = this.clientService.getClientById(idType, idNumber);

  }

}
