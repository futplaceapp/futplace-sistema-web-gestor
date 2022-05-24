import { Injectable } from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  
  usuarioLogado:boolean=false;
 
  constructor(private httpClient: HttpClient) {}

  public async realizarLogin(usuario: any) {
  let response:any;
    await this.httpClient
      .post<any>(`${environment.apiUrl}v1/login`, usuario, { headers: this.getHttpHeaders() })
      .toPromise()
      .then(
        (data) => {response = data; this.usuarioLogado = true;},
        (error) => {response = error;});
      return response;
  }


  private getHttpHeaders ():HttpHeaders{
   return new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": "*",
    });
  }
}
