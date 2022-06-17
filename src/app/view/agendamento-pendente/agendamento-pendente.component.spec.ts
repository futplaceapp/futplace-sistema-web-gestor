import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoPendenteComponent } from './agendamento-pendente.component';

describe('AgendamentoPendenteComponent', () => {
  let component: AgendamentoPendenteComponent;
  let fixture: ComponentFixture<AgendamentoPendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoPendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoPendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
