import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoCreditos } from './listado-creditos';

describe('ListadoCreditos', () => {
  let component: ListadoCreditos;
  let fixture: ComponentFixture<ListadoCreditos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoCreditos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoCreditos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
