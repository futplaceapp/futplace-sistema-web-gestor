import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoBotoesComponent } from './agendamento-botoes.component';

describe('AgendamentoBotoesComponent', () => {
  let component: AgendamentoBotoesComponent;
  let fixture: ComponentFixture<AgendamentoBotoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoBotoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
