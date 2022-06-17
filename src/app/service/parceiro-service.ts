import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ParceiroService {
  constructor(private httpClient: HttpClient) {}

  public async informacoesParceiro(idParceiro: number) {
    let response: any;
    await this.httpClient
      .get(`${environment.apiUrl}v1/parceiro/${idParceiro}`, {
        headers: this.getHttpHeaders(),
      })
      .toPromise()
      .then(
        (data) => {
          response = data;
        },
        (error) => {
          response = error;
        }
      );
    return response;
  }

  public async listaParceiros() {
    let response: any;
    await this.httpClient
      .get(`${environment.apiUrl}v1/parceiro`, {
        headers: this.getHttpHeaders(),
      })
      .toPromise()
      .then(
        (data) => {
          response = data;
        },
        (error) => {
          response = error;
        }
      );
    return response;
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
