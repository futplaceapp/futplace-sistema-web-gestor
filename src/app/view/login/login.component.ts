import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/service/usuario-service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarUtil } from "src/app/util/SnackBarUtil";
import { MensagensUtil } from "src/app/util/MensagensUtil";
import { Router } from "@angular/router";
import { Login } from "src/app/model/Login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  usuario = {} as any;
  snackBarUtil: SnackBarUtil | undefined;
  exibirSenha: boolean = false;
  passwordType: string = "password";

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.snackBarUtil = new SnackBarUtil(this.snackBar);
  }

  public validarRealizarLogin() {
    if (!this.usuario.senha || !this.usuario.usuario)
      this.snackBarUtil?.mensagemErro(MensagensUtil.ERRO_CAMPOS_VAZIOS_LOGIN);
    else if (this.usuario.senha.length < 8)
      this.snackBarUtil?.mensagemAlerta(
        MensagensUtil.ALERTA_LENGTH_SENHA_LOGIN
      );
    else this.realizarLogin();
  }

  public async realizarLogin() {
    let response = await this.usuarioService.realizarLogin(this.usuario);
    if (response.error) {
      this.snackBarUtil?.mensagemErro(response.error.mensagem);
    } else if (response.perfil == "PARCEIRO") {
      this.storeCredentials("usuario", response);
      this.irParaHome();
    } else {
      this.snackBarUtil?.mensagemErro(
        "Você não tem permissão para acessar o sistema."
      );
      return;
    }
  }

  private storeCredentials(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  private fillLoginData(response: any): Login {
    let login = {} as Login;
    login.idUsuario = response.idUsuario;
    login.perfil = response.perfil;
    return login;
  }

  public changeUsuario(event: any): void {
    this.usuario.usuario = event.target.value;
  }

  public changeSenha(event: any): void {
    this.usuario.senha = event.target.value;
  }

  private irParaHome() {
    this.router.navigate(["/home"]);
  }
}
