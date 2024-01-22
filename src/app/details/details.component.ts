import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'
import { ClientService } from "../client.service";
import { Client } from "../client";
import {ReactiveFormsModule} from "@angular/forms";
import {SeparetorDirective} from "../separetor.directive";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SeparetorDirective
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

  constructor(private router: Router) {
    this.clientId = String(this.route.snapshot.params['id'])

    const idType = this.clientId.split(this._strings)[0];
    const idNumber = this.clientId.split(this._strings)[1];

    this.client = this.clientService.getClientById(idType, idNumber);

  }

  goLogin(){
    this.router.navigate(["/"])
  }

}
