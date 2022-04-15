import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaCompristaComponent } from './cuenta-comprista.component';

describe('CuentaCompristaComponent', () => {
  let component: CuentaCompristaComponent;
  let fixture: ComponentFixture<CuentaCompristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaCompristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaCompristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
