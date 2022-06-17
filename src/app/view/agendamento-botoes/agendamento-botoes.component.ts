import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-agendamento-botoes",
  templateUrl: "./agendamento-botoes.component.html",
  styleUrls: ["./agendamento-botoes.component.scss"],
})
export class AgendamentoBotoesComponent implements OnInit {

  @Output() eventosAgendamentoBotoes = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  exibirModalAgendamento() {
    this.eventosAgendamentoBotoes.emit(true);
  }
  
}
