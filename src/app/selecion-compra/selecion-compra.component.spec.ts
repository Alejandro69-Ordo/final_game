import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionCompraComponent } from './selecion-compra.component';

describe('SelecionCompraComponent', () => {
  let component: SelecionCompraComponent;
  let fixture: ComponentFixture<SelecionCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
