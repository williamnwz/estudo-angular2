import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNoticiaComponent } from './item-noticia.component';

describe('ItemNoticiaComponent', () => {
  let component: ItemNoticiaComponent;
  let fixture: ComponentFixture<ItemNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
