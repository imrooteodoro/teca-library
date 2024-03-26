import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincadComponent } from './admincad.component';

describe('AdmincadComponent', () => {
  let component: AdmincadComponent;
  let fixture: ComponentFixture<AdmincadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
