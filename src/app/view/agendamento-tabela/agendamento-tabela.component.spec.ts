import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoTabelaComponent } from './agendamento-tabela.component';

describe('AgendamentoTabelaComponent', () => {
  let component: AgendamentoTabelaComponent;
  let fixture: ComponentFixture<AgendamentoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
