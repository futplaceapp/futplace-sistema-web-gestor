import { Component, OnInit } from "@angular/core";
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
  campos: any;
  dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    ".",
    "Status",
    "Nome",
    "Campo",
    "Data",
    "Dia",
    "Horário",
    "Frequência",
    "Canal",
    "Ações",
  ];
  expandedElement: AgendamentoAgendado | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}

export interface AgendamentoAgendado {
  Id: number;
  Status: string;
  Nome: string;
  Campo: string;
  Data: string;
  Dia: string;
  Horário: string;
  Frequência: string;
  Canal: string;
  Telefone: string;
  ValorReserva: string;
}

const ELEMENT_DATA: AgendamentoAgendado[] = [
  {
    Id: 1,
    Status: "Confirmado",
    Nome: "Tubarões",
    Campo: "3",
    Data: "16/03/2022",
    Dia: "Segunda",
    Horário: "16:30 - 18:00",
    Canal: "Manual",
    Frequência: "Diária",
    Telefone: "(81) 91234-1234",
    ValorReserva: "350",
  },
  {
    Id: 2,
    Status: "Cancelado",
    Nome: "Tubarões",
    Campo: "3",
    Data: "16/03/2022",
    Dia: "Terça",
    Horário: "16:30 - 18:00",
    Canal: "Mobile",
    Frequência: `Mensal`,
    Telefone: "(81) 91234-1234",
    ValorReserva: "250",
  },
];
