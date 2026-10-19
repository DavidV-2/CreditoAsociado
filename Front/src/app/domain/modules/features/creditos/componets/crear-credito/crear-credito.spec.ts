import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCredito } from './crear-credito';

describe('CrearCredito', () => {
  let component: CrearCredito;
  let fixture: ComponentFixture<CrearCredito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCredito],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearCredito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
