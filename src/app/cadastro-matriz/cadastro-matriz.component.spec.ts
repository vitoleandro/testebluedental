import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMatrizComponent } from './cadastro-matriz.component';

describe('CadastroMatrizComponent', () => {
  let component: CadastroMatrizComponent;
  let fixture: ComponentFixture<CadastroMatrizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroMatrizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
