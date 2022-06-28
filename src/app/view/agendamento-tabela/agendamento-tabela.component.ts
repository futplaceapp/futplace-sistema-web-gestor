import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { AgendamentoConfirmado } from "src/app/model/AgendamentoConfirmado";
import { AgendamentoService } from "src/app/service/agendamento-service";

@Component({
  selector: "app-agendamento-tabela",
  templateUrl: "./agendamento-tabela.component.html",
  styleUrls: ["./agendamento-tabela.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class AgendamentoTabelaComponent implements OnInit {
  @Input() campo: any = null;
  @Input() parceiro: any = null;

  listaAgendamentos: AgendamentoConfirmado[] = new Array();
  possuiDados: boolean = false;

  campos: any;
  dataSource = this.listaAgendamentos;
  columnsToDisplay = [
    "id",
    "status",
    "nome",
    "campo",
    "data",
    "dia",
    "horario",
    "tipoAgendamento",
    "canal",
    "acoes",
  ];
  expandedElement: AgendamentoConfirmado | null | undefined;

  constructor(private agendamentoService: AgendamentoService, private cdr : ChangeDetectorRef) {
    this.possuiDados = this.listaAgendamentos.length >= 1 ? true : false;
  }

  ngOnInit(): void {
    console.log(this.campo, this.parceiro);
  }

  async ngOnChanges() {
    this.listaAgendamentos = await this.agendamentoService.agendamentosParceiroCampo(this.campo.id, this.parceiro.idParceiro);
    this.possuiDados = this.listaAgendamentos.length >= 1 ? true : false;
    this.dataSource = this.listaAgendamentos;
  }

  getClass(status: any) {
    return status === "Confirmado" ? "status-confirmado" : "status-cancelado";
  }
}