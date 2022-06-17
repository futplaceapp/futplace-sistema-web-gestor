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
    ".",
    "Nome",
    "Campo",
    "Data",
    "Dia",
    "Horário",
    "Frequência",
    "Canal",
    "Ações",
  ];
  expandedElement: AgendamentoPendente | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}

export interface AgendamentoPendente {
  Id: number;
  Nome: string;
  Campo: string;
  Data: string;
  Dia: string;
  Horário: string;
  Frequência: string;
  Canal: string;
  Telefone: string,
  ValorReserva: string
}

const ELEMENT_DATA: AgendamentoPendente[] = [
  {
    Id: 1,
    Nome: "Tubarões",
    Campo: "3",
    Data: "16/03/2022",
    Dia: "Segunda",
    Horário: "16:30 - 18:00",
    Canal: "Manual",
    Frequência: "Diária",
    Telefone : "(81) 91234-1234",
    ValorReserva : "350"
  },
  {
    Id: 2,
    Nome: "Tubarões",
    Campo: "3",
    Data: "16/03/2022",
    Dia: "Terça",
    Horário: "16:30 - 18:00",
    Canal: "Mobile",
    Frequência: `Mensal`,
    Telefone : "(81) 91234-1234",
    ValorReserva : "250"
  },
];
