import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private httpClient: HttpClient) { }

  public async buscarUtilidades() {
    let response:any;
      await this.httpClient
        .get<any>(`${environment.apiUrl}v1/utils/utilidades`)
        .toPromise()
        .then(
          (data) => {response = data;},
          (error) => {response = error;});
        return response;
    }

public async buscarFormasPagamento() {
  let response:any;
    await this.httpClient
      .get<any>(`${environment.apiUrl}v1/utils/formas-pagamento`)
      .toPromise()
      .then(
        (data) => {response = data;},
        (error) => {response = error;});
      return response;
  }

  public async buscarDiasSemana() {
    let response:any;
      await this.httpClient
        .get<any>(`${environment.apiUrl}v1/utils/dias-semana`)
        .toPromise()
        .then(
          (data) => {response = data;},
          (error) => {response = error;});
        return response;
    }

    public async buscarTurnos() {
      let response:any;
        await this.httpClient
          .get<any>(`${environment.apiUrl}v1/utils/turnos`)
          .toPromise()
          .then(
            (data) => {response = data;},
            (error) => {response = error;});
          return response;
      }
}