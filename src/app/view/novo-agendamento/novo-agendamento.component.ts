import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarUtil } from "src/app/util/SnackBarUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";

import { AgendamentoService } from "src/app/service/agendamento-service";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: "app-novo-agendamento",
  templateUrl: "./novo-agendamento.component.html",
  styleUrls: ["./novo-agendamento.component.scss"],
})
export class NovoAgendamentoComponent implements OnInit {
  @Input() userData3: any = {};
  @Output() eventosNovoAgendamento = new EventEmitter<boolean>();

  snackBarUtil: SnackBarUtil | undefined;

  nome: string = "";
  telefone: string = "";
  campoSelecionado: any;
  dataAgendamento: Date = new Date();
  duracao: string = "";
  tipoReserva: any = {};
  valorReserva: number = 0;
  horarioSelecionado: string = "";
  horariosDisponivel: boolean = true;

  listaCampo: any;
  listaDuracao: any = ["01:00", "01:30", "02:30"];
  listaTipoReserva: any = [
    { id: 1, tipo: "Diária" },
    { id: 2, tipo: "Mensal" },
    { id: 1, tipo: "Escolinha" },
  ];
  listaHorarios: any = ["08:00", "09:00", "10:00"];

  constructor(
    private agendamentoService: AgendamentoService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    moment.locale("pt-br");
    this.snackBarUtil = new SnackBarUtil(this.snackBar);
  }

  ngOnInit(): void {
    this.listaCampo = this.userData3.listaCampos;
    this.listaDuracao = this.userData3.duracaoPartida.split(";");
  }

  fecharModal() {
    console.log(this.campoSelecionado);
    this.eventosNovoAgendamento.emit(true);
  }

  async verificarHorarioDisponiveis() {
    this.horariosDisponivel = true;
    let novoDataAgendamento = moment(this.dataAgendamento)
      .format("L")
      .replace("/", "-")
      .replace("/", "-")
      .replace("/", "-");
    let response = await this.agendamentoService.disponibilidadeCampo(
      novoDataAgendamento,
      this.userData3.idParceiro,
      this.campoSelecionado.id,
      this.tipoReserva.id,
      this.duracao
    );

    if (Array.isArray(response)) {
      this.listaHorarios = response;
      this.horariosDisponivel = false;
    } else {
      this.snackBarUtil?.mensagemAlerta(MensagensUtil.SEM_HORARIO_DISPONIVEL);
    }
  }

  async verificaValorDefault() {
    let novoDataAgendamento = moment(this.dataAgendamento)
      .format("L")
      .replace("/", "-")
      .replace("/", "-")
      .replace("/", "-");
    let response = await this.agendamentoService.valorDefaultCampo(
      novoDataAgendamento,
      this.userData3.idParceiro,
      this.tipoReserva.id,
      this.campoSelecionado.id,
      this.duracao,
      this.horarioSelecionado
    );
    this.valorReserva = 0;
  }

  cadastrarAgendamento() {
    let novoDataAgendamento = moment(this.dataAgendamento).format("L");

    let response = this.agendamentoService.realizarAgendamento(
      this.campoSelecionado.id,
      this.duracao,
      novoDataAgendamento,
      this.tipoReserva.id,
      this.valorReserva,
      this.userData3.idParceiro,
      this.horarioSelecionado,
      1
    );

    this.route.navigate(["/home"])
  }

  async onChangeHorario() {
    await this.verificaValorDefault();
  }

  get checkCamposHorarios(): boolean {
    return !(
      this.campoSelecionado &&
      this.dataAgendamento &&
      this.duracao &&
      this.tipoReserva
    );
  }

  get checkCamposConfirmar(): boolean {
    return !this.horarioSelecionado;
  }
}
