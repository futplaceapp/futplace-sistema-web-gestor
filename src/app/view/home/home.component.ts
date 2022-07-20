import {
  Component,
  HostListener,
  OnInit,
} from "@angular/core";

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
  exibirMenu: boolean = true;

  constructor() {}

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any } }) {
    let largura = event.target.innerWidth;

    if(largura < 868)
      this.exibirMenu = false;
    else
      this.exibirMenu = true;
  }

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
