import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefinicoesCalculoPage } from './definicoes-calculo.page';

describe('DefinicoesCalculoPage', () => {
  let component: DefinicoesCalculoPage;
  let fixture: ComponentFixture<DefinicoesCalculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DefinicoesCalculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
