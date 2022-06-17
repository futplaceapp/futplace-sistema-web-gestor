import { MatSnackBar } from "@angular/material/snack-bar";

export class SnackBarUtil {
  constructor(private snackBar: MatSnackBar) {}

  public async mensagemSucesso(mensagem: string) {
    this.snackBar.open(mensagem, "X", {
      duration: 2000,
      panelClass: ["green-snackbar"],
      verticalPosition: "top",
    });
  }

  public async mensagemAlerta(mensagem: string) {
    this.snackBar.open(mensagem, "X", {
      duration: 2000,
      panelClass: ["yellow-snackbar"],
      verticalPosition: "top",
    });
  }

  public async mensagemErro(mensagem: string) {
    this.snackBar.open(mensagem, "X", {
      duration: 2000,
      panelClass: ["red-snackbar"],
      verticalPosition: "top",
    });
  }
}
