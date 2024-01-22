import { Injectable } from '@angular/core';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor() { }

  clients: Client[] = [
    {
      idType: "C",
      idNumber: "23445322",
      firstName: "Johnathan",
      secondName: "Arley",
      firstLastname: "Monsalve",
      secondLastName: "bello",
      phoneNumber: "123456789",
      address: "calle san juan",
      city: "med"
    },
    {
      idType: "C",
      idNumber: "23445323",
      firstName: "Carlos",
      secondName: "Fernando",
      firstLastname: "Monserrate",
      secondLastName: "Velez",
      phoneNumber: "123456789",
      address: "calle san juan",
      city: "med"
    }
  ];

  getAllClients(): Client[]{
    return this.clients;
  }

  getClientById(idType: string, idNumber: string): Client | undefined {
    return this.clients.find(client => client.idType == idType && client.idNumber == idNumber);
  }

  submitClient(idType: String, idNumber: String){
    console.log(`Loggin CLIENT recived: ${idType} - ${idNumber}`)
  }

}
