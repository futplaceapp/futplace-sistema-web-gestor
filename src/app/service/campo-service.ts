import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class CampoService {

  constructor(private httpClient: HttpClient){}

  public async realizarCadastro(campo:any) {
    let response: any;
    await this.httpClient
      .post<any>(`${environment.apiUrl}v1/campo`, campo, {
        headers: this.getHttpHeaders(),
      })
      .toPromise()
      .then(
        (data) => {response = data;},
        (error) => {response = error;}
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