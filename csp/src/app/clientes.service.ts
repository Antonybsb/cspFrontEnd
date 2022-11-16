import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar( cliente: Cliente ): Observable<Cliente> {
    return this.http.post<Cliente>(
      'http://localhost:8080/api/clientes',
      cliente
    );
  }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Antony Diego';
    cliente.cpf = '00000000000';
    return cliente;
  }
}
