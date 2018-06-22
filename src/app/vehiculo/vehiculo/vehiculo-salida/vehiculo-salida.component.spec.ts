import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoSalidaComponent } from './vehiculo-salida.component';

describe('VehiculoSalidaComponent', () => {
  let component: VehiculoSalidaComponent;
  let fixture: ComponentFixture<VehiculoSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
