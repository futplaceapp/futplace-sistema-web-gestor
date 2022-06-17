import { Component, Input, OnInit } from '@angular/core';
import { Parceiro } from 'src/app/model/Parceiro';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() userData1 : Parceiro = {"nomeParceiro" : "ARENA DBV", "bairro" : "Pina"};

  constructor() { }

  ngOnInit(): void {
  }

}
