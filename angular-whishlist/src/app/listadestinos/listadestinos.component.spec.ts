import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadestinosComponent } from './listadestinos.component';

describe('ListadestinosComponent', () => {
  let component: ListadestinosComponent;
  let fixture: ComponentFixture<ListadestinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadestinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
