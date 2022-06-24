import { Component, Input, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

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
  @Input() listaAgendamentos: any[] | undefined;
  possuiDados: boolean = false;

  campos: any;
  dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    "Id",
    "Status",
    "Nome",
    "Campo",
    "Data",
    "Dia",
    "Horario",
    "Frequencia",
    "Canal",
    "Acoes",
  ];
  expandedElement: AgendamentoAgendado | null | undefined;

  constructor() {
    this.possuiDados = ELEMENT_DATA.length >= 1 ? true : false;
  }

  ngOnInit(): void {}

  getClass(status: any) {
    return status === "Confirmado" ? "status-confirmado" : "status-cancelado";
  }
}

export interface AgendamentoAgendado {
  Id: number;
  Status: string;
  Nome: string;
  Campo: string;
  Data: string;
  Dia: string;
  Horario: string;
  Frequencia: string;
  Canal: string;
  Telefone: string;
  ValorReserva: string;
}

const ELEMENT_DATA: AgendamentoAgendado[] = [
  {
    Id: 1,
    Status: "Confirmado",
    Nome: "Atlatica",
    Campo: "Atlantica 1",
    Data: "12/02/2022",
    Dia: "Segunda",
    Horario: "10:00 - 12:00",
    Frequencia: "Diária",
    Canal: "Site",
    Telefone: "(81) 99999-1234",
    ValorReserva: "500.00",
  },
];
