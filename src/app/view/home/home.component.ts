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
  parceiro: any;
  parceiros: any[] = new Array();
  listaCampo: any;
  exibirModalNovoAgendamento: boolean = false;

  constructor(private parceiroService: ParceiroService, private changeDetector : ChangeDetectorRef) {}

  async ngOnInit() {
    this.usuario = JSON.parse(sessionStorage.usuario);
    this.parceiros = await this.parceiroService.listaParceiros();
    this.parceiroLogado = await this.parceiros.find((parceiro) =>
      this.verificaUsuario(parceiro, this.usuario.idUsuario)
    );
    this.changeDetector.detectChanges();
    console.log(this.parceiroLogado);
  }

  verificaUsuario(parceiro: any, idUsuario: string) {
    return parceiro.id === idUsuario;
  }

  alterandoStatusModel(): void {
    this.exibirModalNovoAgendamento = this.exibirModalNovoAgendamento
      ? false
      : true;
  }
}
