import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarusuComponent } from './listarusu.component';

describe('ListarusuComponent', () => {
  let component: ListarusuComponent;
  let fixture: ComponentFixture<ListarusuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarusuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarusuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
