import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaVendedorComponent } from './cuenta-vendedor.component';

describe('CuentaVendedorComponent', () => {
  let component: CuentaVendedorComponent;
  let fixture: ComponentFixture<CuentaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
