import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { LoginComponent } from "./view/login/login.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { NgxMaskModule } from "ngx-mask";
import { HomeComponent } from "./view/home/home.component";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { AgendamentoPendenteComponent } from "./view/agendamento-pendente/agendamento-pendente.component";
import { AgendamentoBotoesComponent } from "./view/agendamento-botoes/agendamento-botoes.component";
import { MenuComponent } from "./view/menu/menu.component";
import { NovoAgendamentoComponent } from "./view/novo-agendamento/novo-agendamento.component";
import { AgendamentoAgendadoComponent } from "./view/agendamento-agendado/agendamento-agendado.component";
import { AgendamentoTabelaComponent } from "./view/agendamento-tabela/agendamento-tabela.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AgendamentoPendenteComponent,
    AgendamentoBotoesComponent,
    MenuComponent,
    NovoAgendamentoComponent,
    AgendamentoAgendadoComponent,
    AgendamentoTabelaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatStepperModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
