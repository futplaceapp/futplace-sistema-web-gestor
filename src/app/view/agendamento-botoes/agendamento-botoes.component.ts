import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { SnackBarUtil } from "src/app/util/SnackBarUtil";

@Component({
  selector: "app-agendamento-botoes",
  templateUrl: "./agendamento-botoes.component.html",
  styleUrls: ["./agendamento-botoes.component.scss"],
})
export class AgendamentoBotoesComponent implements OnInit {

  snackBarUtil: SnackBarUtil | undefined;
  @Output() eventosAgendamentoBotoes = new EventEmitter<boolean>();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.snackBarUtil = new SnackBarUtil(this.snackBar);
  }

  exibirModalAgendamento() {
    this.eventosAgendamentoBotoes.emit(true);
  }

  mensagemEmConstrucao(){
    this.snackBarUtil?.mensagemAlerta(MensagensUtil.EM_CONSTRUCAO);
  }

}
