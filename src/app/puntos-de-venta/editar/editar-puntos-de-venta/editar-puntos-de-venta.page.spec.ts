import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarPuntosDeVentaPage } from './editar-puntos-de-venta.page';

describe('EditarPuntosDeVentaPage', () => {
  let component: EditarPuntosDeVentaPage;
  let fixture: ComponentFixture<EditarPuntosDeVentaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPuntosDeVentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPuntosDeVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
