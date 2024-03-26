import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUiComponent } from './cadastro-ui.component';

describe('CadastroUiComponent', () => {
  let component: CadastroUiComponent;
  let fixture: ComponentFixture<CadastroUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
