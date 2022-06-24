import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

export interface AgendamentoPendentes {
  id: number;
  Nome: string;
  Campo: number;
  Data: string;
  Dia: string;
  Horário: string;
  Frequência: string;
}

const ELEMENT_DATA_PENDENTES: AgendamentoPendentes[] = [
  {
    id: 1,
    Nome: "Tubaroes",
    Campo: 3,
    Data: "16/03/2022",
    Dia: "Segunda",
    Horário: "16:30 - 18:00",
    Frequência: "Mensal",
  },
  {
    id: 1,
    Nome: "Tubaroes",
    Campo: 2,
    Data: "18/03/2022",
    Dia: "Quarta",
    Horário: "12:00 - 14:00",
    Frequência: "Diária",
  },
];

@Component({
  selector: "app-agendamento-pendente",
  templateUrl: "./agendamento-pendente.component.html",
  styleUrls: ["./agendamento-pendente.component.scss"],
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
export class AgendamentoPendenteComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = [
    "Id",
    "Nome",
    "Campo",
    "Dia",
    "Data",
    "Horario",
    "Frequencia",
    "Acoes",
  ];
  expandedElement: AgendamentoPendente | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}

export interface AgendamentoPendente {
  Id: number;
  Nome: string;
  Campo: string;
  Dia: string;
  Data: string;
  Horario: string;
  Frequencia: string;
  Acoes: string;
}

const ELEMENT_DATA: AgendamentoPendente[] = [
  {
    Id: 1,
    Nome: "Tubarões",
    Campo: "3",
    Dia: "Segunda",
    Data: "12/02/2022",
    Horario: "10:00 - 12:00",
    Frequencia: "Diaria",
    Acoes: "",
  },
  {
    Id: 2,
    Nome: "Peixes",
    Campo: "2",
    Dia: "Quarta",
    Data: "15/02/2022",
    Horario: "14:00 - 16:00",
    Frequencia: "Mensal",
    Acoes: "",
  },
];
