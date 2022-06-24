import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ParceiroService } from "src/app/service/parceiro-service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  parceiroLogado: any = {};
  usuario: any = {};
  listaCampo: any;
  exibirModalNovoAgendamento: boolean = false;

  constructor() {}

  async ngOnInit() {
    this.usuario = JSON.parse(sessionStorage.usuario);
    this.parceiroLogado = this.usuario;
  }

  alterandoStatusModel(): void {
    this.exibirModalNovoAgendamento = this.exibirModalNovoAgendamento
      ? false
      : true;
  }
}
