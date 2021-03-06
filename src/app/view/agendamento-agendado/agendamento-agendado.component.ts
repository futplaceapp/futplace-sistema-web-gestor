import { Component, Input, OnChanges } from "@angular/core";
import * as moment from "moment";
import { AgendamentoConfirmado } from "src/app/model/AgendamentoConfirmado";

@Component({
  selector: "app-agendamento-agendado",
  templateUrl: "./agendamento-agendado.component.html",
  styleUrls: ["./agendamento-agendado.component.scss"],
})
export class AgendamentoAgendadoComponent implements OnChanges {
  
  @Input() userData2: any = {};
  campos: any = new Array();
  diaAtual: any;
  contadorDias: number = 0;
  listaAgendamentos : AgendamentoConfirmado[] = new Array();

  constructor() {
    moment.locale("pt-br");
    this.campos.push({ nome: "Teste" });
    this.campos.push({ nome: "Teste 2" });
    this.campos.push({ nome: "Teste 3" });
    this.dataAtual();
  }

  async ngOnChanges() {
    if (this.userData2.listaCampos) this.campos = this.userData2.listaCampos;
  }

  dataAtual() {
    let dataAtual = new Date();
    this.diaAtual = moment(dataAtual).format("LL");
  }

  diaAtualMaisUm() {
    this.contadorDias += 1;
    this.diaAtual = moment(new Date())
      .add(this.contadorDias, "days")
      .format("LL");
  }

  diaAtualMenosUm() {
    this.contadorDias -= 1;
    this.diaAtual = moment(new Date())
      .add(this.contadorDias, "days")
      .format("LL");
  }

  selectData(event: Event) {}
}
