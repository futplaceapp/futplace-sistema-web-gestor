import { Component, Input, OnInit } from '@angular/core';
import { Parceiro } from 'src/app/model/Parceiro';
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { SnackBarUtil } from 'src/app/util/SnackBarUtil';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  snackBarUtil: SnackBarUtil | undefined;
  @Input() userData1 : Parceiro = {"nomeParceiro" : "ARENA DBV", "bairro" : "Pina"};

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.snackBarUtil = new SnackBarUtil(this.snackBar);
  }

  mensagemEmConstrucao(){
    this.snackBarUtil?.mensagemAlerta(MensagensUtil.EM_CONSTRUCAO);
  }

}
