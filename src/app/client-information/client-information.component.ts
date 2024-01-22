import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../client';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-client-information',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl:'./client-information.component.html',
  styleUrl: './client-information.component.css'
})
export class ClientInformationComponent {

  @Input() client!: Client;
  private readonly _strings = "-";
  clientId = ""

  //clientId: string = this.client.idType.concat(this._strings).concat(this.client.idNumber.toString());

}
