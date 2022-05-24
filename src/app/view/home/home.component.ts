import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  exibirModalNovoAgendamento: boolean= false;


  constructor() { }

  ngOnInit(): void {
  }

  public exibirModalAgendamento():void{
    this.exibirModalNovoAgendamento= this.exibirModalNovoAgendamento? false: true;
  }



}
