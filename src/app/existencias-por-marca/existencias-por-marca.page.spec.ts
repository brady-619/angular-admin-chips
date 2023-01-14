import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistenciasPorMarcaPage } from './existencias-por-marca.page';

describe('ExistenciasPorMarcaPage', () => {
  let component: ExistenciasPorMarcaPage;
  let fixture: ComponentFixture<ExistenciasPorMarcaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistenciasPorMarcaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistenciasPorMarcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
