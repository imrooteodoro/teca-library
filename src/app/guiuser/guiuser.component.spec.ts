import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiuserComponent } from './guiuser.component';

describe('GuiuserComponent', () => {
  let component: GuiuserComponent;
  let fixture: ComponentFixture<GuiuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuiuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
