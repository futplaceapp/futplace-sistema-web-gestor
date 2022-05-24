import { Component,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UsuarioService } from './service/usuario-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private usuarioService: UsuarioService,
              private router: Router) {}


  public exibirHeader():boolean{
    return this.usuarioService.usuarioLogado? true:false;
  }

  public sair(){
    this.usuarioService.usuarioLogado=false;
    this.router.navigateByUrl('/login')
  }
}
