import { NumberSymbol } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AgendamentoConfirmado } from "../model/AgendamentoConfirmado";

@Injectable({
  providedIn: "root",
})
export class AgendamentoService {
  constructor(private httpClient: HttpClient) {}

  public async realizarAgendamento(
    idCampo: number,
    duracao: string,
    dataAgendamento: string,
    idTipoAgendamento: number,
    valorReserva: number,
    idParceiro: number,
    hora: string,
    canal: number
  ) {
    let response: any;
    await this.httpClient
      .post<any>(`${environment.apiUrl}v1/agendamento`, {
        idCampo : idCampo,
        duracao : duracao,
        dataAgendamento : dataAgendamento,
        idTipoAgendamento : idTipoAgendamento,
        valorReserva : valorReserva,
        idParceiro : idParceiro,
        hora : hora,
        canal : canal
      }, {
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

  //"/disponibilidade/{dataAgendamento}/{idParceiro}/{idCampo}/{idTipoAgendamento}/{duracaoPartida}"
  public async disponibilidadeCampo(
    dataAgendamento: string,
    idParceiro: string,
    idCampo: string,
    idTipoAgendamento: string,
    duracaoPartida: string
  ) {
    let response: any;
    await this.httpClient
      .get<any>(
        `${environment.apiUrl}v1/agendamento/disponibilidade/${dataAgendamento}/${idParceiro}/${idCampo}/${idTipoAgendamento}/${duracaoPartida}`
      )
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

  //valorDefault/{dataAgendamento}/{idParceiro}/{idCampo}/{duracaoPartida}/{idTipoAgendamento}/{horarioPartida}"
  public async valorDefaultCampo(
    dataAgendamento: string,
    idParceiro: string,
    idCampo: string,
    idTipoAgendamento: string,
    duracaoPartida: string,
    horarioPartida: string
  ) {
    let response: any;
    await this.httpClient
      .get<any>(
        `${environment.apiUrl}v1/agendamento/valorDefault/${dataAgendamento}/${idParceiro}/${idCampo}/${duracaoPartida}/${idTipoAgendamento}/${horarioPartida}`
      )
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

  //valorDefault/{dataAgendamento}/{idParceiro}/{idCampo}/{duracaoPartida}/{idTipoAgendamento}/{horarioPartida}"
  public async agendamentosParceiroCampo(
    idParceiro: string,
    idCampo: string
  ) {
    let response: any;
    await this.httpClient
      .get<AgendamentoConfirmado>(
        `${environment.apiUrl}v1/agendamento/parceiro/${idParceiro}/${idCampo}`
      )
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
