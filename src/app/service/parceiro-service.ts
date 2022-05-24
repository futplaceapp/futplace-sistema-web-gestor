import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Parceiro } from "../model/Parceiro";

@Injectable({
  providedIn: "root",
})
export class ParceiroService {
  constructor(private httpClient: HttpClient) {}

  public async realizarCadastro(parceiro: Parceiro) {
    let response: any;
    await this.httpClient
      .post<Parceiro>(`${environment.apiUrl}v1/parceiro`, parceiro, {
        headers: this.getHttpHeaders(),
      })
      .toPromise()
      .then(
        (data) => {response = data;},
        (error) => {response = error;}
      );
    return response;
  }

  public async editarParceiro(parceiro: any) {
    let response: any;
    await this.httpClient
      .put<Parceiro>(`${environment.apiUrl}v1/parceiro/${parceiro.id}`, parceiro, {
        headers: this.getHttpHeaders(),
      })
      .toPromise()
      .then(
        (data) => {response = data;},
        (error) => {response = error;}
      );
    return response;
  }

  public async inativarParceiro(idParceiro: any) {
    let response: any;
    await this.httpClient
      .put<any>(`${environment.apiUrl}v1/parceiro/inativar/${idParceiro}`,  {
        headers: this.getHttpHeaders(),
      })
      .toPromise()
      .then(
        (data) => {response = data;},
        (error) => {response = error;}
      );
    return response;
  }

  public async ativarParceiro(idParceiro: any) {
    let response: any;
    await this.httpClient
      .put<any>(`${environment.apiUrl}v1/parceiro/ativar/${idParceiro}`,   {
        headers: this.getHttpHeaders(),
      })
      .toPromise()
      .then(
        (data) => {response = data;},
        (error) => {response = error;}
      );
    return response;
  }

  public async listarParceiro() {
    let resultado: any;
    await this.httpClient
      .get(`${environment.apiUrl}v1/parceiro`)
      .toPromise()
      .then(
        (data) => {resultado = data;},
        (error) => {resultado =error.error;}
      );
      return resultado;
  }

  public async excluirParceiro(idParceiro: any) {
    let resultado: any;
    await this.httpClient
      .delete(`${environment.apiUrl}v1/parceiro/${idParceiro}`)
      .toPromise()
      .then(
        (data) => {resultado = data;},
        (error) => {resultado =error.error;}
      );
      return resultado;
  }

  private getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*",
    });
  }
}
