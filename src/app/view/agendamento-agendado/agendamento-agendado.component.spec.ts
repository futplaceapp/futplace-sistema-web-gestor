import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoAgendadoComponent } from './agendamento-agendado.component';

describe('AgendamentoAgendadoComponent', () => {
  let component: AgendamentoAgendadoComponent;
  let fixture: ComponentFixture<AgendamentoAgendadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoAgendadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoAgendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
