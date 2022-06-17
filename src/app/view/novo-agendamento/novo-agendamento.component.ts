import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-novo-agendamento",
  templateUrl: "./novo-agendamento.component.html",
  styleUrls: ["./novo-agendamento.component.scss"],
})
export class NovoAgendamentoComponent implements OnInit {
  
  @Input() userData3: any = {};
  @Output() eventosNovoAgendamento = new EventEmitter<boolean>();

  listaCampo: any;

  constructor() {}

  ngOnInit(): void {
    this.listaCampo = this.userData3.listaCampos;
  }

  fecharModal() {
    this.eventosNovoAgendamento.emit(true);
  }
}
