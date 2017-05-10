import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNoticiasComponent } from './lista-noticias.component';

describe('ListaNoticiasComponent', () => {
  let component: ListaNoticiasComponent;
  let fixture: ComponentFixture<ListaNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
