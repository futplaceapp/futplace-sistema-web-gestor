import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-agendamento-agendado",
  templateUrl: "./agendamento-agendado.component.html",
  styleUrls: ["./agendamento-agendado.component.scss"],
})
export class AgendamentoAgendadoComponent implements OnChanges {
  
  @Input() userData2: any = {};
  campos: any = new Array();

  constructor() {
    this.campos.push({"nome" : "Teste"})
  }

  ngOnChanges(): void {
    if(this.userData2.listaCampos)
      this.campos = this.userData2.listaCampos;


    console.log(this.userData2);
  }

}
